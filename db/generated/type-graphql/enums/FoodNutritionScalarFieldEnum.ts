import * as TypeGraphQL from "type-graphql";

export enum FoodNutritionScalarFieldEnum {
  id = "id",
  foodId = "foodId",
  quantity = "quantity",
  unitId = "unitId",
  calories = "calories",
  protein = "protein",
  fat = "fat",
  carbs = "carbs"
}
TypeGraphQL.registerEnumType(FoodNutritionScalarFieldEnum, {
  name: "FoodNutritionScalarFieldEnum",
  description: undefined,
});
