import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutWeighInsInput } from "../inputs/UserCreateWithoutWeighInsInput";
import { UserUpdateWithoutWeighInsInput } from "../inputs/UserUpdateWithoutWeighInsInput";

@TypeGraphQL.InputType("UserUpsertWithoutWeighInsInput", {
  isAbstract: true
})
export class UserUpsertWithoutWeighInsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutWeighInsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutWeighInsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutWeighInsInput, {
    nullable: false
  })
  create!: UserCreateWithoutWeighInsInput;
}
