import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Meal } from "../models/Meal";
import { Recipe } from "../models/Recipe";
import { Unit } from "../models/Unit";

@TypeGraphQL.ObjectType("RecipeInMeal", {
  isAbstract: true
})
export class RecipeInMeal {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  recipe?: Recipe;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  recipeId!: number;

  meal?: Meal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  mealId!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantity!: Prisma.Decimal;

  unit?: Unit;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  unitId!: number;
}
