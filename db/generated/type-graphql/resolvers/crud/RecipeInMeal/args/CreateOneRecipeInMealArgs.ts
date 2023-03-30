import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeInMealCreateInput } from "../../../inputs/RecipeInMealCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRecipeInMealArgs {
  @TypeGraphQL.Field(_type => RecipeInMealCreateInput, {
    nullable: false
  })
  data!: RecipeInMealCreateInput;
}
