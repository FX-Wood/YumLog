import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutRoleNestedInput } from "../inputs/UserUpdateManyWithoutRoleNestedInput";

@TypeGraphQL.InputType("RoleUpdateInput", {
  isAbstract: true
})
export class RoleUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutRoleNestedInput, {
    nullable: true
  })
  users?: UserUpdateManyWithoutRoleNestedInput | undefined;
}
