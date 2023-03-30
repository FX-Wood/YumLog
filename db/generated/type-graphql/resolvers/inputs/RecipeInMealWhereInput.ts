import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MealRelationFilter } from "../inputs/MealRelationFilter";
import { RecipeRelationFilter } from "../inputs/RecipeRelationFilter";
import { UnitRelationFilter } from "../inputs/UnitRelationFilter";

@TypeGraphQL.InputType("RecipeInMealWhereInput", {
  isAbstract: true
})
export class RecipeInMealWhereInput {
  @TypeGraphQL.Field(_type => [RecipeInMealWhereInput], {
    nullable: true
  })
  AND?: RecipeInMealWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealWhereInput], {
    nullable: true
  })
  OR?: RecipeInMealWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealWhereInput], {
    nullable: true
  })
  NOT?: RecipeInMealWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => RecipeRelationFilter, {
    nullable: true
  })
  recipe?: RecipeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  recipeId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MealRelationFilter, {
    nullable: true
  })
  meal?: MealRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  mealId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  quantity?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => UnitRelationFilter, {
    nullable: true
  })
  unit?: UnitRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  unitId?: IntFilter | undefined;
}
