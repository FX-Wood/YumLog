import * as TypeGraphQL from "type-graphql";

export enum UnitScalarFieldEnum {
  id = "id",
  name = "name",
  abbreviation = "abbreviation"
}
TypeGraphQL.registerEnumType(UnitScalarFieldEnum, {
  name: "UnitScalarFieldEnum",
  description: undefined,
});
