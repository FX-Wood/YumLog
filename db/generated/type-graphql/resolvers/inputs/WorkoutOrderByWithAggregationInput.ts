import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkoutAvgOrderByAggregateInput } from "../inputs/WorkoutAvgOrderByAggregateInput";
import { WorkoutCountOrderByAggregateInput } from "../inputs/WorkoutCountOrderByAggregateInput";
import { WorkoutMaxOrderByAggregateInput } from "../inputs/WorkoutMaxOrderByAggregateInput";
import { WorkoutMinOrderByAggregateInput } from "../inputs/WorkoutMinOrderByAggregateInput";
import { WorkoutSumOrderByAggregateInput } from "../inputs/WorkoutSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WorkoutOrderByWithAggregationInput", {
  isAbstract: true
})
export class WorkoutOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  calories?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => WorkoutCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WorkoutCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkoutAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: WorkoutAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkoutMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WorkoutMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkoutMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WorkoutMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkoutSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: WorkoutSumOrderByAggregateInput | undefined;
}
