import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealUpdateManyWithoutFoodNestedInput } from "../inputs/FoodInMealUpdateManyWithoutFoodNestedInput";
import { FoodInRecipeUpdateManyWithoutFoodNestedInput } from "../inputs/FoodInRecipeUpdateManyWithoutFoodNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FoodUpdateWithoutNutritionInput", {
  isAbstract: true
})
export class FoodUpdateWithoutNutritionInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  brand?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FoodInMealUpdateManyWithoutFoodNestedInput, {
    nullable: true
  })
  meals?: FoodInMealUpdateManyWithoutFoodNestedInput | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeUpdateManyWithoutFoodNestedInput, {
    nullable: true
  })
  recipes?: FoodInRecipeUpdateManyWithoutFoodNestedInput | undefined;
}
