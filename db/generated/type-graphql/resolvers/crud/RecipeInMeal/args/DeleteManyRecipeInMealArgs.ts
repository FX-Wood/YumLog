import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeInMealWhereInput } from "../../../inputs/RecipeInMealWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRecipeInMealArgs {
  @TypeGraphQL.Field(_type => RecipeInMealWhereInput, {
    nullable: true
  })
  where?: RecipeInMealWhereInput | undefined;
}
