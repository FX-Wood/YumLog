import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeInMealOrderByWithAggregationInput } from "../../../inputs/RecipeInMealOrderByWithAggregationInput";
import { RecipeInMealScalarWhereWithAggregatesInput } from "../../../inputs/RecipeInMealScalarWhereWithAggregatesInput";
import { RecipeInMealWhereInput } from "../../../inputs/RecipeInMealWhereInput";
import { RecipeInMealScalarFieldEnum } from "../../../../enums/RecipeInMealScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRecipeInMealArgs {
  @TypeGraphQL.Field(_type => RecipeInMealWhereInput, {
    nullable: true
  })
  where?: RecipeInMealWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: RecipeInMealOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "recipeId" | "mealId" | "quantity" | "unitId">;

  @TypeGraphQL.Field(_type => RecipeInMealScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RecipeInMealScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
