import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRecipesInput } from "../inputs/UserCreateOrConnectWithoutRecipesInput";
import { UserCreateWithoutRecipesInput } from "../inputs/UserCreateWithoutRecipesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutRecipesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutRecipesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutRecipesInput, {
    nullable: true
  })
  create?: UserCreateWithoutRecipesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRecipesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRecipesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
