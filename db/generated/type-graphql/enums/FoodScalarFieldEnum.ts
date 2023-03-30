import * as TypeGraphQL from "type-graphql";

export enum FoodScalarFieldEnum {
  id = "id",
  name = "name",
  brand = "brand"
}
TypeGraphQL.registerEnumType(FoodScalarFieldEnum, {
  name: "FoodScalarFieldEnum",
  description: undefined,
});
