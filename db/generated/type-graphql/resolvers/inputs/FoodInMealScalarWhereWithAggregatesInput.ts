import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("FoodInMealScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class FoodInMealScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FoodInMealScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FoodInMealScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FoodInMealScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FoodInMealScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  foodId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  mealId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  quantity?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  unitId?: IntWithAggregatesFilter | undefined;
}
