import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutWorkoutsInput } from "../inputs/UserCreateWithoutWorkoutsInput";
import { UserUpdateWithoutWorkoutsInput } from "../inputs/UserUpdateWithoutWorkoutsInput";

@TypeGraphQL.InputType("UserUpsertWithoutWorkoutsInput", {
  isAbstract: true
})
export class UserUpsertWithoutWorkoutsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutWorkoutsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutWorkoutsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutWorkoutsInput, {
    nullable: false
  })
  create!: UserCreateWithoutWorkoutsInput;
}
