import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("FoodInRecipeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class FoodInRecipeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FoodInRecipeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FoodInRecipeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FoodInRecipeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FoodInRecipeScalarWhereWithAggregatesInput[] | undefined;

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
  recipeId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  quantity?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  unitId?: IntWithAggregatesFilter | undefined;
}
