import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MealCreateInput } from "../../../inputs/MealCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMealArgs {
  @TypeGraphQL.Field(_type => MealCreateInput, {
    nullable: false
  })
  data!: MealCreateInput;
}
