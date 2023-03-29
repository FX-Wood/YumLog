import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeighInAvgOrderByAggregateInput } from "../inputs/WeighInAvgOrderByAggregateInput";
import { WeighInCountOrderByAggregateInput } from "../inputs/WeighInCountOrderByAggregateInput";
import { WeighInMaxOrderByAggregateInput } from "../inputs/WeighInMaxOrderByAggregateInput";
import { WeighInMinOrderByAggregateInput } from "../inputs/WeighInMinOrderByAggregateInput";
import { WeighInSumOrderByAggregateInput } from "../inputs/WeighInSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WeighInOrderByWithAggregationInput", {
  isAbstract: true
})
export class WeighInOrderByWithAggregationInput {
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
  weight?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => WeighInCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WeighInCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WeighInAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: WeighInAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WeighInMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WeighInMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WeighInMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WeighInMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WeighInSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: WeighInSumOrderByAggregateInput | undefined;
}
