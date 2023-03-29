import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutWeighInsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutWeighInsNestedInput";

@TypeGraphQL.InputType("WeighInUpdateInput", {
  isAbstract: true
})
export class WeighInUpdateInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutWeighInsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutWeighInsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  weight?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
