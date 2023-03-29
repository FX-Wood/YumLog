import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("FoodScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class FoodScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FoodScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FoodScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FoodScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FoodScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  brand?: StringWithAggregatesFilter | undefined;

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
