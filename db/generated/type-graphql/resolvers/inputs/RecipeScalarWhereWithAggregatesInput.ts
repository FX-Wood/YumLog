import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("RecipeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class RecipeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RecipeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RecipeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RecipeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RecipeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
