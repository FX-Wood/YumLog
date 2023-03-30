import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealAvgOrderByAggregateInput } from "../inputs/RecipeInMealAvgOrderByAggregateInput";
import { RecipeInMealCountOrderByAggregateInput } from "../inputs/RecipeInMealCountOrderByAggregateInput";
import { RecipeInMealMaxOrderByAggregateInput } from "../inputs/RecipeInMealMaxOrderByAggregateInput";
import { RecipeInMealMinOrderByAggregateInput } from "../inputs/RecipeInMealMinOrderByAggregateInput";
import { RecipeInMealSumOrderByAggregateInput } from "../inputs/RecipeInMealSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RecipeInMealOrderByWithAggregationInput", {
  isAbstract: true
})
export class RecipeInMealOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  recipeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mealId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  unitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RecipeInMealCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: RecipeInMealAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RecipeInMealMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RecipeInMealMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: RecipeInMealSumOrderByAggregateInput | undefined;
}
