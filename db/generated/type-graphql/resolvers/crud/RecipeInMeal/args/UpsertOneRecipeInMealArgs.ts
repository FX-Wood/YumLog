import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeInMealCreateInput } from "../../../inputs/RecipeInMealCreateInput";
import { RecipeInMealUpdateInput } from "../../../inputs/RecipeInMealUpdateInput";
import { RecipeInMealWhereUniqueInput } from "../../../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneRecipeInMealArgs {
  @TypeGraphQL.Field(_type => RecipeInMealWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeInMealWhereUniqueInput;

  @TypeGraphQL.Field(_type => RecipeInMealCreateInput, {
    nullable: false
  })
  create!: RecipeInMealCreateInput;

  @TypeGraphQL.Field(_type => RecipeInMealUpdateInput, {
    nullable: false
  })
  update!: RecipeInMealUpdateInput;
}
