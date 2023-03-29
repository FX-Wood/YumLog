import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutWeighInsInput } from "../inputs/UserCreateWithoutWeighInsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutWeighInsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutWeighInsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutWeighInsInput, {
    nullable: false
  })
  create!: UserCreateWithoutWeighInsInput;
}
