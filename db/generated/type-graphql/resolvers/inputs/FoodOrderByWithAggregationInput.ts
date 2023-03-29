import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodAvgOrderByAggregateInput } from "../inputs/FoodAvgOrderByAggregateInput";
import { FoodCountOrderByAggregateInput } from "../inputs/FoodCountOrderByAggregateInput";
import { FoodMaxOrderByAggregateInput } from "../inputs/FoodMaxOrderByAggregateInput";
import { FoodMinOrderByAggregateInput } from "../inputs/FoodMinOrderByAggregateInput";
import { FoodSumOrderByAggregateInput } from "../inputs/FoodSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FoodOrderByWithAggregationInput", {
  isAbstract: true
})
export class FoodOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  brand?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => FoodCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FoodCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FoodAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FoodMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FoodMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FoodSumOrderByAggregateInput | undefined;
}
