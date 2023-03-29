import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutWorkoutsInput } from "../inputs/UserCreateWithoutWorkoutsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutWorkoutsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutWorkoutsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutWorkoutsInput, {
    nullable: false
  })
  create!: UserCreateWithoutWorkoutsInput;
}
