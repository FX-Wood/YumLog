import * as TypeGraphQL from "type-graphql";
import { FoodInMeal } from "../../../models/FoodInMeal";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { FoodNutrition } from "../../../models/FoodNutrition";
import { RecipeInMeal } from "../../../models/RecipeInMeal";
import { Unit } from "../../../models/Unit";
import { UnitFoodNutritionArgs } from "./args/UnitFoodNutritionArgs";
import { UnitMealFoodsArgs } from "./args/UnitMealFoodsArgs";
import { UnitMealRecipeArgs } from "./args/UnitMealRecipeArgs";
import { UnitRecipeFoodsArgs } from "./args/UnitRecipeFoodsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Unit)
export class UnitRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [FoodInMeal], {
    nullable: false
  })
  async mealFoods(@TypeGraphQL.Root() unit: Unit, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UnitMealFoodsArgs): Promise<FoodInMeal[]> {
    return getPrismaFromContext(ctx).unit.findUnique({
      where: {
        id: unit.id,
      },
    }).mealFoods(args);
  }

  @TypeGraphQL.FieldResolver(_type => [RecipeInMeal], {
    nullable: false
  })
  async mealRecipe(@TypeGraphQL.Root() unit: Unit, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UnitMealRecipeArgs): Promise<RecipeInMeal[]> {
    return getPrismaFromContext(ctx).unit.findUnique({
      where: {
        id: unit.id,
      },
    }).mealRecipe(args);
  }

  @TypeGraphQL.FieldResolver(_type => [FoodInRecipe], {
    nullable: false
  })
  async recipeFoods(@TypeGraphQL.Root() unit: Unit, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UnitRecipeFoodsArgs): Promise<FoodInRecipe[]> {
    return getPrismaFromContext(ctx).unit.findUnique({
      where: {
        id: unit.id,
      },
    }).recipeFoods(args);
  }

  @TypeGraphQL.FieldResolver(_type => [FoodNutrition], {
    nullable: false
  })
  async foodNutrition(@TypeGraphQL.Root() unit: Unit, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UnitFoodNutritionArgs): Promise<FoodNutrition[]> {
    return getPrismaFromContext(ctx).unit.findUnique({
      where: {
        id: unit.id,
      },
    }).foodNutrition(args);
  }
}
