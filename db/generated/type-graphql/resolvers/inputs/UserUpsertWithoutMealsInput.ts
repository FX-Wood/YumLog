import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutMealsInput } from "../inputs/UserCreateWithoutMealsInput";
import { UserUpdateWithoutMealsInput } from "../inputs/UserUpdateWithoutMealsInput";

@TypeGraphQL.InputType("UserUpsertWithoutMealsInput", {
  isAbstract: true
})
export class UserUpsertWithoutMealsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutMealsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutMealsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutMealsInput, {
    nullable: false
  })
  create!: UserCreateWithoutMealsInput;
}
