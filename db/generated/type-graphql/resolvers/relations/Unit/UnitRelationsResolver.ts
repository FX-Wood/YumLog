import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FoodInMeal } from "../../../models/FoodInMeal";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { FoodNutrition } from "../../../models/FoodNutrition";
import { RecipeInMeal } from "../../../models/RecipeInMeal";
import { Unit } from "../../../models/Unit";
import { UnitFoodNutritionArgs } from "./args/UnitFoodNutritionArgs";
import { UnitMealFoodsArgs } from "./args/UnitMealFoodsArgs";
import { UnitMealRecipeArgs } from "./args/UnitMealRecipeArgs";
import { UnitRecipeFoodsArgs } from "./args/UnitRecipeFoodsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Unit)
export class UnitRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [FoodInMeal], {
    nullable: false
  })
  async mealFoods(@TypeGraphQL.Root() unit: Unit, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UnitMealFoodsArgs): Promise<FoodInMeal[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unit.findUniqueOrThrow({
      where: {
        id: unit.id,
      },
    }).mealFoods({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [RecipeInMeal], {
    nullable: false
  })
  async mealRecipe(@TypeGraphQL.Root() unit: Unit, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UnitMealRecipeArgs): Promise<RecipeInMeal[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unit.findUniqueOrThrow({
      where: {
        id: unit.id,
      },
    }).mealRecipe({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [FoodInRecipe], {
    nullable: false
  })
  async recipeFoods(@TypeGraphQL.Root() unit: Unit, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UnitRecipeFoodsArgs): Promise<FoodInRecipe[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unit.findUniqueOrThrow({
      where: {
        id: unit.id,
      },
    }).recipeFoods({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [FoodNutrition], {
    nullable: false
  })
  async foodNutrition(@TypeGraphQL.Root() unit: Unit, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UnitFoodNutritionArgs): Promise<FoodNutrition[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unit.findUniqueOrThrow({
      where: {
        id: unit.id,
      },
    }).foodNutrition({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
