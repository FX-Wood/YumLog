import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import argon2 from 'argon2'
import { sign } from './jwt'

import { UserCredentialInput, UserAuthResult, AuthError, AuthSuccess } from './auth-types'
import { User } from '../../db/generated/type-graphql'
import Context from '../context'

@Resolver()
class LoginResolver {
  // this is conventionally a mutation, often because there is
  // some field that is mutated, for example "lastLogin"
  @Mutation(() => UserAuthResult)
  async login(
    @Ctx() ctx: Context,
    @Arg('data', () => UserCredentialInput)
    { email, password }: UserCredentialInput
  ): Promise<typeof UserAuthResult> {
    const error = new AuthError(
      "AUTH_ERROR",
      "There was an error authenticating the user"
    )
    const dbUser: User|null = await ctx.prisma.user.findUnique({ where: { email: email }, include: { role: true }})
    if (!dbUser) {
      return error
    }
    if (!dbUser.role) {
      return error
    }
    const dbUserPassword = dbUser.password
    const isValidLogin = await argon2.verify(dbUserPassword, password)

    if (isValidLogin) {
      const token = await sign({ email, role: dbUser.role.name })
      const res = new AuthSuccess(dbUser, token)
      console.log(res)
      return res
    }
    return error
  }
}

export default LoginResolver

