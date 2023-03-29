import * as TypeGraphQL from "type-graphql";

export enum WeighInScalarFieldEnum {
  id = "id",
  userId = "userId",
  weight = "weight",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(WeighInScalarFieldEnum, {
  name: "WeighInScalarFieldEnum",
  description: undefined,
});
