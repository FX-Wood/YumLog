import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByRecipeInMealArgs } from "./args/GroupByRecipeInMealArgs";
import { RecipeInMeal } from "../../../models/RecipeInMeal";
import { RecipeInMealGroupBy } from "../../outputs/RecipeInMealGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RecipeInMeal)
export class GroupByRecipeInMealResolver {
  @TypeGraphQL.Query(_returns => [RecipeInMealGroupBy], {
    nullable: false
  })
  async groupByRecipeInMeal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByRecipeInMealArgs): Promise<RecipeInMealGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).recipeInMeal.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
