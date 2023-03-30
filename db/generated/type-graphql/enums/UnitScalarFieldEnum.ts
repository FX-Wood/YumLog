import * as TypeGraphQL from "type-graphql";

export enum UnitScalarFieldEnum {
  id = "id",
  name = "name",
  shortname = "shortname",
  volume = "volume"
}
TypeGraphQL.registerEnumType(UnitScalarFieldEnum, {
  name: "UnitScalarFieldEnum",
  description: undefined,
});
