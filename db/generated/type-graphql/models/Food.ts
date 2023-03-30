import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { FoodInMeal } from "../models/FoodInMeal";
import { FoodInRecipe } from "../models/FoodInRecipe";
import { FoodNutrition } from "../models/FoodNutrition";
import { FoodCount } from "../resolvers/outputs/FoodCount";

@TypeGraphQL.ObjectType("Food", {
  isAbstract: true
})
export class Food {
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
  brand!: string;

  nutrition?: FoodNutrition[];

  meals?: FoodInMeal[];

  recipes?: FoodInRecipe[];

  @TypeGraphQL.Field(_type => FoodCount, {
    nullable: true
  })
  _count?: FoodCount | null;
}
