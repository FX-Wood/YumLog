import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("RecipeInMealScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class RecipeInMealScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RecipeInMealScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RecipeInMealScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RecipeInMealScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RecipeInMealScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  recipeId?: IntWithAggregatesFilter | undefined;

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
