import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitAvgOrderByAggregateInput } from "../inputs/UnitAvgOrderByAggregateInput";
import { UnitCountOrderByAggregateInput } from "../inputs/UnitCountOrderByAggregateInput";
import { UnitMaxOrderByAggregateInput } from "../inputs/UnitMaxOrderByAggregateInput";
import { UnitMinOrderByAggregateInput } from "../inputs/UnitMinOrderByAggregateInput";
import { UnitSumOrderByAggregateInput } from "../inputs/UnitSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UnitOrderByWithAggregationInput", {
  isAbstract: true
})
export class UnitOrderByWithAggregationInput {
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
  shortname?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  volume?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UnitCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UnitCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UnitAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UnitAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UnitMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UnitMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UnitMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UnitMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UnitSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UnitSumOrderByAggregateInput | undefined;
}
