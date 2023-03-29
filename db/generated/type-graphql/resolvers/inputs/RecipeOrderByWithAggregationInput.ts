import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeAvgOrderByAggregateInput } from "../inputs/RecipeAvgOrderByAggregateInput";
import { RecipeCountOrderByAggregateInput } from "../inputs/RecipeCountOrderByAggregateInput";
import { RecipeMaxOrderByAggregateInput } from "../inputs/RecipeMaxOrderByAggregateInput";
import { RecipeMinOrderByAggregateInput } from "../inputs/RecipeMinOrderByAggregateInput";
import { RecipeSumOrderByAggregateInput } from "../inputs/RecipeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RecipeOrderByWithAggregationInput", {
  isAbstract: true
})
export class RecipeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RecipeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RecipeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RecipeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: RecipeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RecipeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RecipeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RecipeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RecipeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RecipeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: RecipeSumOrderByAggregateInput | undefined;
}
