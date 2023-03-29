import * as TypeGraphQL from "type-graphql";

export enum WorkoutScalarFieldEnum {
  id = "id",
  userId = "userId",
  name = "name",
  calories = "calories"
}
TypeGraphQL.registerEnumType(WorkoutScalarFieldEnum, {
  name: "WorkoutScalarFieldEnum",
  description: undefined,
});
