import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeInMealWhereUniqueInput } from "../../../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRecipeInMealArgs {
  @TypeGraphQL.Field(_type => RecipeInMealWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeInMealWhereUniqueInput;
}
