import * as TypeGraphQL from "type-graphql";
import { Food } from "../../../models/Food";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { Recipe } from "../../../models/Recipe";
import { Unit } from "../../../models/Unit";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodInRecipe)
export class FoodInRecipeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Food, {
    nullable: false
  })
  async food(@TypeGraphQL.Root() foodInRecipe: FoodInRecipe, @TypeGraphQL.Ctx() ctx: any): Promise<Food> {
    return getPrismaFromContext(ctx).foodInRecipe.findUnique({
      where: {
        id: foodInRecipe.id,
      },
    }).food({});
  }

  @TypeGraphQL.FieldResolver(_type => Recipe, {
    nullable: false
  })
  async recipe(@TypeGraphQL.Root() foodInRecipe: FoodInRecipe, @TypeGraphQL.Ctx() ctx: any): Promise<Recipe> {
    return getPrismaFromContext(ctx).foodInRecipe.findUnique({
      where: {
        id: foodInRecipe.id,
      },
    }).recipe({});
  }

  @TypeGraphQL.FieldResolver(_type => Unit, {
    nullable: false
  })
  async unit(@TypeGraphQL.Root() foodInRecipe: FoodInRecipe, @TypeGraphQL.Ctx() ctx: any): Promise<Unit> {
    return getPrismaFromContext(ctx).foodInRecipe.findUnique({
      where: {
        id: foodInRecipe.id,
      },
    }).unit({});
  }
}
