import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Meal } from "../../../models/Meal";
import { Recipe } from "../../../models/Recipe";
import { RecipeInMeal } from "../../../models/RecipeInMeal";
import { Unit } from "../../../models/Unit";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RecipeInMeal)
export class RecipeInMealRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Recipe, {
    nullable: false
  })
  async recipe(@TypeGraphQL.Root() recipeInMeal: RecipeInMeal, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Recipe> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).recipeInMeal.findUniqueOrThrow({
      where: {
        id: recipeInMeal.id,
      },
    }).recipe({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Meal, {
    nullable: false
  })
  async meal(@TypeGraphQL.Root() recipeInMeal: RecipeInMeal, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Meal> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).recipeInMeal.findUniqueOrThrow({
      where: {
        id: recipeInMeal.id,
      },
    }).meal({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Unit, {
    nullable: false
  })
  async unit(@TypeGraphQL.Root() recipeInMeal: RecipeInMeal, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Unit> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).recipeInMeal.findUniqueOrThrow({
      where: {
        id: recipeInMeal.id,
      },
    }).unit({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
