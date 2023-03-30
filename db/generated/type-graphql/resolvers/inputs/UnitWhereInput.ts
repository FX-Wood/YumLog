import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { FoodInMealListRelationFilter } from "../inputs/FoodInMealListRelationFilter";
import { FoodInRecipeListRelationFilter } from "../inputs/FoodInRecipeListRelationFilter";
import { FoodNutritionListRelationFilter } from "../inputs/FoodNutritionListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { RecipeInMealListRelationFilter } from "../inputs/RecipeInMealListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("UnitWhereInput", {
  isAbstract: true
})
export class UnitWhereInput {
  @TypeGraphQL.Field(_type => [UnitWhereInput], {
    nullable: true
  })
  AND?: UnitWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitWhereInput], {
    nullable: true
  })
  OR?: UnitWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitWhereInput], {
    nullable: true
  })
  NOT?: UnitWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  shortname?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  volume?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => FoodInMealListRelationFilter, {
    nullable: true
  })
  mealFoods?: FoodInMealListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealListRelationFilter, {
    nullable: true
  })
  mealRecipe?: RecipeInMealListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeListRelationFilter, {
    nullable: true
  })
  recipeFoods?: FoodInRecipeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FoodNutritionListRelationFilter, {
    nullable: true
  })
  foodNutrition?: FoodNutritionListRelationFilter | undefined;
}
