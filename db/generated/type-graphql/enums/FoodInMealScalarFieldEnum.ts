import * as TypeGraphQL from "type-graphql";

export enum FoodInMealScalarFieldEnum {
  id = "id",
  foodId = "foodId",
  mealId = "mealId",
  quantity = "quantity",
  unitId = "unitId"
}
TypeGraphQL.registerEnumType(FoodInMealScalarFieldEnum, {
  name: "FoodInMealScalarFieldEnum",
  description: undefined,
});
