import { Field, InputType, ObjectType, createUnionType } from 'type-graphql'
import { User } from '../../db/generated/type-graphql'

@InputType()
export class UserCredentialInput implements Partial<User> {
  @Field()
  email!: string
  @Field()
  password!: string
}

@ObjectType()
export class AuthError {
  constructor(code: string, message: string) {
    this.code = code
    this.message = message
  }
  @Field()
  code!: string
  @Field()
  message!: string
}

@ObjectType()
export class AuthSuccess {
  constructor(user: User, jwt: string) {
    this.user = user
    this.jwt = jwt
  }
  @Field()
  user!: User
  @Field()
  jwt!: string
}

export const UserAuthResult = createUnionType({
  name: 'UserAuthResult',
  types: () => [AuthSuccess, AuthError] as const
})
