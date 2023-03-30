import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("RecipeInMealScalarWhereInput", {
  isAbstract: true
})
export class RecipeInMealScalarWhereInput {
  @TypeGraphQL.Field(_type => [RecipeInMealScalarWhereInput], {
    nullable: true
  })
  AND?: RecipeInMealScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealScalarWhereInput], {
    nullable: true
  })
  OR?: RecipeInMealScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealScalarWhereInput], {
    nullable: true
  })
  NOT?: RecipeInMealScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  recipeId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  mealId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  quantity?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  unitId?: IntFilter | undefined;
}
