import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumMealTypeFieldUpdateOperationsInput } from "../inputs/EnumMealTypeFieldUpdateOperationsInput";
import { FoodInMealUpdateManyWithoutMealNestedInput } from "../inputs/FoodInMealUpdateManyWithoutMealNestedInput";

@TypeGraphQL.InputType("MealUpdateWithoutUserInput", {
  isAbstract: true
})
export class MealUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => EnumMealTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  mealType?: EnumMealTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FoodInMealUpdateManyWithoutMealNestedInput, {
    nullable: true
  })
  foods?: FoodInMealUpdateManyWithoutMealNestedInput | undefined;
}
