import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { FoodInMealUpdateManyWithoutUnitNestedInput } from "../inputs/FoodInMealUpdateManyWithoutUnitNestedInput";
import { FoodNutritionUpdateManyWithoutUnitNestedInput } from "../inputs/FoodNutritionUpdateManyWithoutUnitNestedInput";
import { RecipeInMealUpdateManyWithoutUnitNestedInput } from "../inputs/RecipeInMealUpdateManyWithoutUnitNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UnitUpdateWithoutRecipeFoodsInput", {
  isAbstract: true
})
export class UnitUpdateWithoutRecipeFoodsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  shortname?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  volume?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FoodInMealUpdateManyWithoutUnitNestedInput, {
    nullable: true
  })
  mealFoods?: FoodInMealUpdateManyWithoutUnitNestedInput | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealUpdateManyWithoutUnitNestedInput, {
    nullable: true
  })
  mealRecipe?: RecipeInMealUpdateManyWithoutUnitNestedInput | undefined;

  @TypeGraphQL.Field(_type => FoodNutritionUpdateManyWithoutUnitNestedInput, {
    nullable: true
  })
  foodNutrition?: FoodNutritionUpdateManyWithoutUnitNestedInput | undefined;
}
