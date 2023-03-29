import * as TypeGraphQL from "type-graphql";

export enum MealScalarFieldEnum {
  id = "id",
  userId = "userId",
  mealType = "mealType"
}
TypeGraphQL.registerEnumType(MealScalarFieldEnum, {
  name: "MealScalarFieldEnum",
  description: undefined,
});
