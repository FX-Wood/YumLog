import * as TypeGraphQL from "type-graphql";

export enum MealType {
  BREAKFAST = "BREAKFAST",
  LUNCH = "LUNCH",
  DINNER = "DINNER",
  SNACK = "SNACK"
}
TypeGraphQL.registerEnumType(MealType, {
  name: "MealType",
  description: undefined,
});
