import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { FoodRelationFilter } from "../inputs/FoodRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { RecipeRelationFilter } from "../inputs/RecipeRelationFilter";
import { UnitRelationFilter } from "../inputs/UnitRelationFilter";

@TypeGraphQL.InputType("FoodInRecipeWhereInput", {
  isAbstract: true
})
export class FoodInRecipeWhereInput {
  @TypeGraphQL.Field(_type => [FoodInRecipeWhereInput], {
    nullable: true
  })
  AND?: FoodInRecipeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeWhereInput], {
    nullable: true
  })
  OR?: FoodInRecipeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeWhereInput], {
    nullable: true
  })
  NOT?: FoodInRecipeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FoodRelationFilter, {
    nullable: true
  })
  food?: FoodRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  foodId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => RecipeRelationFilter, {
    nullable: true
  })
  recipe?: RecipeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  recipeId?: IntFilter | undefined;

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
