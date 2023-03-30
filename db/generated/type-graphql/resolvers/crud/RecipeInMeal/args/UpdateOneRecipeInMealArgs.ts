import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeInMealUpdateInput } from "../../../inputs/RecipeInMealUpdateInput";
import { RecipeInMealWhereUniqueInput } from "../../../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRecipeInMealArgs {
  @TypeGraphQL.Field(_type => RecipeInMealUpdateInput, {
    nullable: false
  })
  data!: RecipeInMealUpdateInput;

  @TypeGraphQL.Field(_type => RecipeInMealWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeInMealWhereUniqueInput;
}
