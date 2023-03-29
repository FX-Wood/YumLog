import * as TypeGraphQL from "type-graphql";

export enum RecipeScalarFieldEnum {
  id = "id",
  userId = "userId",
  name = "name"
}
TypeGraphQL.registerEnumType(RecipeScalarFieldEnum, {
  name: "RecipeScalarFieldEnum",
  description: undefined,
});
