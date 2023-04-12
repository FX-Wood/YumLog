import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import argon2 from 'argon2'
import { sign } from './jwt'

import { UserCredentialInput, UserAuthResult, AuthError, AuthSuccess } from './auth-types'
import { User } from '../../db/generated/type-graphql'
import Context from '../context'

@Resolver()
class RegisterResolver {
  @Mutation(() => UserAuthResult)
  async register(
    @Ctx() ctx: Context,
    @Arg('data', () => UserCredentialInput)
    { email, password }: UserCredentialInput
  ): Promise<typeof UserAuthResult> {
    const error = new AuthError(
      "AUTH_ERROR",
      "There was an error authenticating the user"
    )
    const existingUser: User|null = await ctx.prisma.user.findUnique({ where: { email: email }})
    if (existingUser) {
      return error
    }

    const hashedPassword = await argon2.hash(password)
    const userRole = await ctx.prisma.role.findFirst({ where: { name: 'user' }})
    await ctx.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: {
          connect: {
            id: userRole?.id
          }
        }
      }
    })
    const dbUser = await ctx.prisma.user.findUnique({ where: { email: email }, include: { role: true }})
    if (!dbUser) {
      return error
    }
    if (!dbUser.role) {
      return error
    }
    const token = await sign({ email, role: dbUser.role.name})
    return new AuthSuccess(dbUser, token)
  }
}

export default RegisterResolver

