import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumMealTypeFieldUpdateOperationsInput } from "../inputs/EnumMealTypeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MealUpdateManyMutationInput", {
  isAbstract: true
})
export class MealUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => EnumMealTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  mealType?: EnumMealTypeFieldUpdateOperationsInput | undefined;
}
