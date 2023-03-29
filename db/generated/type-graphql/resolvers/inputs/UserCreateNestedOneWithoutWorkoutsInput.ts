import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutWorkoutsInput } from "../inputs/UserCreateOrConnectWithoutWorkoutsInput";
import { UserCreateWithoutWorkoutsInput } from "../inputs/UserCreateWithoutWorkoutsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutWorkoutsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutWorkoutsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutWorkoutsInput, {
    nullable: true
  })
  create?: UserCreateWithoutWorkoutsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutWorkoutsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutWorkoutsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
