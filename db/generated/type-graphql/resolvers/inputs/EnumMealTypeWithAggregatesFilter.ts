import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumMealTypeFilter } from "../inputs/NestedEnumMealTypeFilter";
import { NestedEnumMealTypeWithAggregatesFilter } from "../inputs/NestedEnumMealTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { MealType } from "../../enums/MealType";

@TypeGraphQL.InputType("EnumMealTypeWithAggregatesFilter", {
  isAbstract: true
})
export class EnumMealTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => MealType, {
    nullable: true
  })
  equals?: "BREAKFAST" | "LUNCH" | "DINNER" | "SNACK" | undefined;

  @TypeGraphQL.Field(_type => [MealType], {
    nullable: true
  })
  in?: Array<"BREAKFAST" | "LUNCH" | "DINNER" | "SNACK"> | undefined;

  @TypeGraphQL.Field(_type => [MealType], {
    nullable: true
  })
  notIn?: Array<"BREAKFAST" | "LUNCH" | "DINNER" | "SNACK"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMealTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumMealTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMealTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumMealTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMealTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumMealTypeFilter | undefined;
}
