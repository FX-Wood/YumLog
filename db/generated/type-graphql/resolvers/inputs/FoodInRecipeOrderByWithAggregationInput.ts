import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeAvgOrderByAggregateInput } from "../inputs/FoodInRecipeAvgOrderByAggregateInput";
import { FoodInRecipeCountOrderByAggregateInput } from "../inputs/FoodInRecipeCountOrderByAggregateInput";
import { FoodInRecipeMaxOrderByAggregateInput } from "../inputs/FoodInRecipeMaxOrderByAggregateInput";
import { FoodInRecipeMinOrderByAggregateInput } from "../inputs/FoodInRecipeMinOrderByAggregateInput";
import { FoodInRecipeSumOrderByAggregateInput } from "../inputs/FoodInRecipeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FoodInRecipeOrderByWithAggregationInput", {
  isAbstract: true
})
export class FoodInRecipeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  foodId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  recipeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  unitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FoodInRecipeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FoodInRecipeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FoodInRecipeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FoodInRecipeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FoodInRecipeSumOrderByAggregateInput | undefined;
}
