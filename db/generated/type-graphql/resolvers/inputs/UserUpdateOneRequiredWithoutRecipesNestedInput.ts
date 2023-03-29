import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRecipesInput } from "../inputs/UserCreateOrConnectWithoutRecipesInput";
import { UserCreateWithoutRecipesInput } from "../inputs/UserCreateWithoutRecipesInput";
import { UserUpdateWithoutRecipesInput } from "../inputs/UserUpdateWithoutRecipesInput";
import { UserUpsertWithoutRecipesInput } from "../inputs/UserUpsertWithoutRecipesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutRecipesNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutRecipesNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutRecipesInput, {
    nullable: true
  })
  create?: UserCreateWithoutRecipesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRecipesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRecipesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutRecipesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutRecipesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutRecipesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutRecipesInput | undefined;
}
