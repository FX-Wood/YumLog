import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyRecipeInMealArgs } from "./args/FindManyRecipeInMealArgs";
import { RecipeInMeal } from "../../../models/RecipeInMeal";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RecipeInMeal)
export class FindManyRecipeInMealResolver {
  @TypeGraphQL.Query(_returns => [RecipeInMeal], {
    nullable: false
  })
  async recipeInMeals(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyRecipeInMealArgs): Promise<RecipeInMeal[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).recipeInMeal.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
