import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutWeighInsInput } from "../inputs/UserCreateOrConnectWithoutWeighInsInput";
import { UserCreateWithoutWeighInsInput } from "../inputs/UserCreateWithoutWeighInsInput";
import { UserUpdateWithoutWeighInsInput } from "../inputs/UserUpdateWithoutWeighInsInput";
import { UserUpsertWithoutWeighInsInput } from "../inputs/UserUpsertWithoutWeighInsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutWeighInsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutWeighInsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutWeighInsInput, {
    nullable: true
  })
  create?: UserCreateWithoutWeighInsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutWeighInsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutWeighInsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutWeighInsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutWeighInsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutWeighInsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutWeighInsInput | undefined;
}
