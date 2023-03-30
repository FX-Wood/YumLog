import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { FoodInRecipe } from "../models/FoodInRecipe";
import { RecipeInMeal } from "../models/RecipeInMeal";
import { User } from "../models/User";
import { RecipeCount } from "../resolvers/outputs/RecipeCount";

@TypeGraphQL.ObjectType("Recipe", {
  isAbstract: true
})
export class Recipe {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  foods?: FoodInRecipe[];

  meals?: RecipeInMeal[];

  @TypeGraphQL.Field(_type => RecipeCount, {
    nullable: true
  })
  _count?: RecipeCount | null;
}
