import * as TypeGraphQL from "type-graphql";

export enum RecipeInMealScalarFieldEnum {
  id = "id",
  recipeId = "recipeId",
  mealId = "mealId",
  quantity = "quantity",
  unitId = "unitId"
}
TypeGraphQL.registerEnumType(RecipeInMealScalarFieldEnum, {
  name: "RecipeInMealScalarFieldEnum",
  description: undefined,
});
