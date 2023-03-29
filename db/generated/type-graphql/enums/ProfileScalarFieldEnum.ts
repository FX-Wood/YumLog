import * as TypeGraphQL from "type-graphql";

export enum ProfileScalarFieldEnum {
  id = "id",
  userId = "userId",
  firstName = "firstName",
  lastName = "lastName",
  calorieGoal = "calorieGoal",
  weightGoal = "weightGoal",
  metric = "metric"
}
TypeGraphQL.registerEnumType(ProfileScalarFieldEnum, {
  name: "ProfileScalarFieldEnum",
  description: undefined,
});
