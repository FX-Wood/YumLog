import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutWeighInsInput } from "../inputs/UserCreateOrConnectWithoutWeighInsInput";
import { UserCreateWithoutWeighInsInput } from "../inputs/UserCreateWithoutWeighInsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutWeighInsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutWeighInsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutWeighInsInput, {
    nullable: true
  })
  create?: UserCreateWithoutWeighInsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutWeighInsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutWeighInsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
