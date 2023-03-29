import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealType } from "../../enums/MealType";

@TypeGraphQL.InputType("NestedEnumMealTypeFilter", {
  isAbstract: true
})
export class NestedEnumMealTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumMealTypeFilter, {
    nullable: true
  })
  not?: NestedEnumMealTypeFilter | undefined;
}
