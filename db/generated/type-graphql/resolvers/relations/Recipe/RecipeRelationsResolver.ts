import * as TypeGraphQL from "type-graphql";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { Recipe } from "../../../models/Recipe";
import { User } from "../../../models/User";
import { RecipeFoodsArgs } from "./args/RecipeFoodsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Recipe)
export class RecipeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() recipe: Recipe, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).recipe.findUnique({
      where: {
        id: recipe.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [FoodInRecipe], {
    nullable: false
  })
  async foods(@TypeGraphQL.Root() recipe: Recipe, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RecipeFoodsArgs): Promise<FoodInRecipe[]> {
    return getPrismaFromContext(ctx).recipe.findUnique({
      where: {
        id: recipe.id,
      },
    }).foods(args);
  }
}
