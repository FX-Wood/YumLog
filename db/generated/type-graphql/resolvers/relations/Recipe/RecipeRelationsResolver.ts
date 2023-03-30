import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { Recipe } from "../../../models/Recipe";
import { RecipeInMeal } from "../../../models/RecipeInMeal";
import { User } from "../../../models/User";
import { RecipeFoodsArgs } from "./args/RecipeFoodsArgs";
import { RecipeMealsArgs } from "./args/RecipeMealsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Recipe)
export class RecipeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() recipe: Recipe, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).recipe.findUniqueOrThrow({
      where: {
        id: recipe.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [FoodInRecipe], {
    nullable: false
  })
  async foods(@TypeGraphQL.Root() recipe: Recipe, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: RecipeFoodsArgs): Promise<FoodInRecipe[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).recipe.findUniqueOrThrow({
      where: {
        id: recipe.id,
      },
    }).foods({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [RecipeInMeal], {
    nullable: false
  })
  async meals(@TypeGraphQL.Root() recipe: Recipe, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: RecipeMealsArgs): Promise<RecipeInMeal[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).recipe.findUniqueOrThrow({
      where: {
        id: recipe.id,
      },
    }).meals({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
