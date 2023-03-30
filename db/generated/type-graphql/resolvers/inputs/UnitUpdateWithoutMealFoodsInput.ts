import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { FoodInRecipeUpdateManyWithoutUnitNestedInput } from "../inputs/FoodInRecipeUpdateManyWithoutUnitNestedInput";
import { FoodNutritionUpdateManyWithoutUnitNestedInput } from "../inputs/FoodNutritionUpdateManyWithoutUnitNestedInput";
import { RecipeInMealUpdateManyWithoutUnitNestedInput } from "../inputs/RecipeInMealUpdateManyWithoutUnitNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UnitUpdateWithoutMealFoodsInput", {
  isAbstract: true
})
export class UnitUpdateWithoutMealFoodsInput {
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

  @TypeGraphQL.Field(_type => RecipeInMealUpdateManyWithoutUnitNestedInput, {
    nullable: true
  })
  mealRecipe?: RecipeInMealUpdateManyWithoutUnitNestedInput | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeUpdateManyWithoutUnitNestedInput, {
    nullable: true
  })
  recipeFoods?: FoodInRecipeUpdateManyWithoutUnitNestedInput | undefined;

  @TypeGraphQL.Field(_type => FoodNutritionUpdateManyWithoutUnitNestedInput, {
    nullable: true
  })
  foodNutrition?: FoodNutritionUpdateManyWithoutUnitNestedInput | undefined;
}
