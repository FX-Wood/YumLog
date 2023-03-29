import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealAvgOrderByAggregateInput } from "../inputs/FoodInMealAvgOrderByAggregateInput";
import { FoodInMealCountOrderByAggregateInput } from "../inputs/FoodInMealCountOrderByAggregateInput";
import { FoodInMealMaxOrderByAggregateInput } from "../inputs/FoodInMealMaxOrderByAggregateInput";
import { FoodInMealMinOrderByAggregateInput } from "../inputs/FoodInMealMinOrderByAggregateInput";
import { FoodInMealSumOrderByAggregateInput } from "../inputs/FoodInMealSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FoodInMealOrderByWithAggregationInput", {
  isAbstract: true
})
export class FoodInMealOrderByWithAggregationInput {
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
  mealId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  unitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FoodInMealCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FoodInMealCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodInMealAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FoodInMealAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodInMealMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FoodInMealMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodInMealMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FoodInMealMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodInMealSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FoodInMealSumOrderByAggregateInput | undefined;
}
