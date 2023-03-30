import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("FoodNutritionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class FoodNutritionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FoodNutritionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FoodNutritionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FoodNutritionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FoodNutritionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  foodId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  quantity?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  unitId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  calories?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  protein?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  fat?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  carbs?: DecimalWithAggregatesFilter | undefined;
}
