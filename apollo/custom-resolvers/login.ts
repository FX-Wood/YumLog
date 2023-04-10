import { Field, InputType, Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import argon2 from 'argon2'

import { User } from '../../db/generated/type-graphql'
import Context from '../context'

@InputType()
export class UserLoginInput implements Partial<User> {
  @Field()
  email!: string
  @Field()
  password!: string
}

@Resolver()
class LoginResolver {
  @Mutation(() => User)
  async login(
    @Ctx() ctx: Context,
    @Arg('data', () => UserLoginInput)
    { email, password }: UserLoginInput
  ): Promise<User|null> {
    const dbUser = await ctx.prisma.user.findFirst({ where: { email: email }})
    const dbUserPassword = dbUser?.password || ''
    const isValidLogin = await argon2.verify(dbUserPassword, password)

    if (isValidLogin) {
      return dbUser
    }
    return null
  }
}

export default LoginResolver
