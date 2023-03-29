import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealAvgOrderByAggregateInput } from "../inputs/MealAvgOrderByAggregateInput";
import { MealCountOrderByAggregateInput } from "../inputs/MealCountOrderByAggregateInput";
import { MealMaxOrderByAggregateInput } from "../inputs/MealMaxOrderByAggregateInput";
import { MealMinOrderByAggregateInput } from "../inputs/MealMinOrderByAggregateInput";
import { MealSumOrderByAggregateInput } from "../inputs/MealSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MealOrderByWithAggregationInput", {
  isAbstract: true
})
export class MealOrderByWithAggregationInput {
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
  mealType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MealCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MealCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MealAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MealAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MealMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MealMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MealMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MealMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MealSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MealSumOrderByAggregateInput | undefined;
}
