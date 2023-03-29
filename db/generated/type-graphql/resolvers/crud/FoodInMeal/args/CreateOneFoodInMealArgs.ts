import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodInMealCreateInput } from "../../../inputs/FoodInMealCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneFoodInMealArgs {
  @TypeGraphQL.Field(_type => FoodInMealCreateInput, {
    nullable: false
  })
  data!: FoodInMealCreateInput;
}
