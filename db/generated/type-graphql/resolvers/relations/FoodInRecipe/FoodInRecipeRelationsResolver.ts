import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Food } from "../../../models/Food";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { Recipe } from "../../../models/Recipe";
import { Unit } from "../../../models/Unit";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodInRecipe)
export class FoodInRecipeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Food, {
    nullable: false
  })
  async food(@TypeGraphQL.Root() foodInRecipe: FoodInRecipe, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Food> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.findUniqueOrThrow({
      where: {
        id: foodInRecipe.id,
      },
    }).food({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Recipe, {
    nullable: false
  })
  async recipe(@TypeGraphQL.Root() foodInRecipe: FoodInRecipe, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Recipe> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.findUniqueOrThrow({
      where: {
        id: foodInRecipe.id,
      },
    }).recipe({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Unit, {
    nullable: false
  })
  async unit(@TypeGraphQL.Root() foodInRecipe: FoodInRecipe, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Unit> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.findUniqueOrThrow({
      where: {
        id: foodInRecipe.id,
      },
    }).unit({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
