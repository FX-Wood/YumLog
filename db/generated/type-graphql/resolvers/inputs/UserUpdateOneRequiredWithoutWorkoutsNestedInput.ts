import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutWorkoutsInput } from "../inputs/UserCreateOrConnectWithoutWorkoutsInput";
import { UserCreateWithoutWorkoutsInput } from "../inputs/UserCreateWithoutWorkoutsInput";
import { UserUpdateWithoutWorkoutsInput } from "../inputs/UserUpdateWithoutWorkoutsInput";
import { UserUpsertWithoutWorkoutsInput } from "../inputs/UserUpsertWithoutWorkoutsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutWorkoutsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutWorkoutsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutWorkoutsInput, {
    nullable: true
  })
  create?: UserCreateWithoutWorkoutsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutWorkoutsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutWorkoutsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutWorkoutsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutWorkoutsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutWorkoutsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutWorkoutsInput | undefined;
}
