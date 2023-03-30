import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueRecipeInMealOrThrowArgs } from "./args/FindUniqueRecipeInMealOrThrowArgs";
import { RecipeInMeal } from "../../../models/RecipeInMeal";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RecipeInMeal)
export class FindUniqueRecipeInMealOrThrowResolver {
  @TypeGraphQL.Query(_returns => RecipeInMeal, {
    nullable: true
  })
  async getRecipeInMeal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueRecipeInMealOrThrowArgs): Promise<RecipeInMeal | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).recipeInMeal.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
