import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutRecipesInput } from "../inputs/UserCreateWithoutRecipesInput";
import { UserUpdateWithoutRecipesInput } from "../inputs/UserUpdateWithoutRecipesInput";

@TypeGraphQL.InputType("UserUpsertWithoutRecipesInput", {
  isAbstract: true
})
export class UserUpsertWithoutRecipesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutRecipesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutRecipesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutRecipesInput, {
    nullable: false
  })
  create!: UserCreateWithoutRecipesInput;
}
