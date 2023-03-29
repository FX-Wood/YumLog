import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumMealTypeWithAggregatesFilter } from "../inputs/EnumMealTypeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("MealScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class MealScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MealScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MealScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MealScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MealScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MealScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MealScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumMealTypeWithAggregatesFilter, {
    nullable: true
  })
  mealType?: EnumMealTypeWithAggregatesFilter | undefined;
}
