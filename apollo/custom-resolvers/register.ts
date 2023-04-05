import { Field, InputType, Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import argon2 from 'argon2'

import { User } from '../../db/generated/type-graphql'
import Context from '../context'

@InputType()
export class UserRegisterInput implements Partial<User> {
  @Field()
  email!: string
  @Field()
  password!: string
}

@Resolver()
class RegisterResolver {
  @Mutation(() => User)
  async register(
    @Ctx() ctx: Context,
    @Arg('data', () => UserRegisterInput)
    { email, password }: UserRegisterInput
  ): Promise<User> {
    const hashedPassword = await argon2.hash(password)
    const userRole = await ctx.prisma.role.findFirst({ where: { name: 'user' }})
    const user = await ctx.prisma.user.create({
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
    return user
  }
}

export default RegisterResolver

