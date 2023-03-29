import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkoutCreateInput } from "../../../inputs/WorkoutCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWorkoutArgs {
  @TypeGraphQL.Field(_type => WorkoutCreateInput, {
    nullable: false
  })
  data!: WorkoutCreateInput;
}
