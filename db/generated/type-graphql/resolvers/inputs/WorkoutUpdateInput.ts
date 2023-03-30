import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutWorkoutsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutWorkoutsNestedInput";

@TypeGraphQL.InputType("WorkoutUpdateInput", {
  isAbstract: true
})
export class WorkoutUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  calories?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutWorkoutsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutWorkoutsNestedInput | undefined;
}
