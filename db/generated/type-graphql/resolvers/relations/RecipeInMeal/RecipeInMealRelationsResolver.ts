import * as TypeGraphQL from "type-graphql";
import { Meal } from "../../../models/Meal";
import { Recipe } from "../../../models/Recipe";
import { RecipeInMeal } from "../../../models/RecipeInMeal";
import { Unit } from "../../../models/Unit";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RecipeInMeal)
export class RecipeInMealRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Recipe, {
    nullable: false
  })
  async recipe(@TypeGraphQL.Root() recipeInMeal: RecipeInMeal, @TypeGraphQL.Ctx() ctx: any): Promise<Recipe> {
    return getPrismaFromContext(ctx).recipeInMeal.findUnique({
      where: {
        id: recipeInMeal.id,
      },
    }).recipe({});
  }

  @TypeGraphQL.FieldResolver(_type => Meal, {
    nullable: false
  })
  async meal(@TypeGraphQL.Root() recipeInMeal: RecipeInMeal, @TypeGraphQL.Ctx() ctx: any): Promise<Meal> {
    return getPrismaFromContext(ctx).recipeInMeal.findUnique({
      where: {
        id: recipeInMeal.id,
      },
    }).meal({});
  }

  @TypeGraphQL.FieldResolver(_type => Unit, {
    nullable: false
  })
  async unit(@TypeGraphQL.Root() recipeInMeal: RecipeInMeal, @TypeGraphQL.Ctx() ctx: any): Promise<Unit> {
    return getPrismaFromContext(ctx).recipeInMeal.findUnique({
      where: {
        id: recipeInMeal.id,
      },
    }).unit({});
  }
}
