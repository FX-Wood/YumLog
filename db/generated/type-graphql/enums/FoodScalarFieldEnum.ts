import * as TypeGraphQL from "type-graphql";

export enum FoodScalarFieldEnum {
  id = "id",
  name = "name",
  brand = "brand",
  calories = "calories",
  protein = "protein",
  fat = "fat",
  carbs = "carbs"
}
TypeGraphQL.registerEnumType(FoodScalarFieldEnum, {
  name: "FoodScalarFieldEnum",
  description: undefined,
});
