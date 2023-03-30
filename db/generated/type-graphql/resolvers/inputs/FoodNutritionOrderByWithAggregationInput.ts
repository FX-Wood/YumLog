import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodNutritionAvgOrderByAggregateInput } from "../inputs/FoodNutritionAvgOrderByAggregateInput";
import { FoodNutritionCountOrderByAggregateInput } from "../inputs/FoodNutritionCountOrderByAggregateInput";
import { FoodNutritionMaxOrderByAggregateInput } from "../inputs/FoodNutritionMaxOrderByAggregateInput";
import { FoodNutritionMinOrderByAggregateInput } from "../inputs/FoodNutritionMinOrderByAggregateInput";
import { FoodNutritionSumOrderByAggregateInput } from "../inputs/FoodNutritionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FoodNutritionOrderByWithAggregationInput", {
  isAbstract: true
})
export class FoodNutritionOrderByWithAggregationInput {
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
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  unitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  calories?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  protein?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fat?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  carbs?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FoodNutritionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FoodNutritionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodNutritionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FoodNutritionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodNutritionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FoodNutritionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodNutritionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FoodNutritionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodNutritionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FoodNutritionSumOrderByAggregateInput | undefined;
}
