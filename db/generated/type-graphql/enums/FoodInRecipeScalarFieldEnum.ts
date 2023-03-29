import * as TypeGraphQL from "type-graphql";

export enum FoodInRecipeScalarFieldEnum {
  id = "id",
  foodId = "foodId",
  recipeId = "recipeId",
  quantity = "quantity",
  unitId = "unitId"
}
TypeGraphQL.registerEnumType(FoodInRecipeScalarFieldEnum, {
  name: "FoodInRecipeScalarFieldEnum",
  description: undefined,
});
