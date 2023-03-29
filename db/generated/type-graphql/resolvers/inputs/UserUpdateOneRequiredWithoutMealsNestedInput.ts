import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMealsInput } from "../inputs/UserCreateOrConnectWithoutMealsInput";
import { UserCreateWithoutMealsInput } from "../inputs/UserCreateWithoutMealsInput";
import { UserUpdateWithoutMealsInput } from "../inputs/UserUpdateWithoutMealsInput";
import { UserUpsertWithoutMealsInput } from "../inputs/UserUpsertWithoutMealsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutMealsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutMealsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutMealsInput, {
    nullable: true
  })
  create?: UserCreateWithoutMealsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMealsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMealsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutMealsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutMealsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutMealsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutMealsInput | undefined;
}
