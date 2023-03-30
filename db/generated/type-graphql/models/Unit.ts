import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { FoodInMeal } from "../models/FoodInMeal";
import { FoodInRecipe } from "../models/FoodInRecipe";
import { FoodNutrition } from "../models/FoodNutrition";
import { RecipeInMeal } from "../models/RecipeInMeal";
import { UnitCount } from "../resolvers/outputs/UnitCount";

@TypeGraphQL.ObjectType("Unit", {
  isAbstract: true
})
export class Unit {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shortname!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  volume!: boolean;

  mealFoods?: FoodInMeal[];

  mealRecipe?: RecipeInMeal[];

  recipeFoods?: FoodInRecipe[];

  foodNutrition?: FoodNutrition[];

  @TypeGraphQL.Field(_type => UnitCount, {
    nullable: true
  })
  _count?: UnitCount | null;
}
