import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByFoodInRecipeArgs } from "./args/GroupByFoodInRecipeArgs";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { FoodInRecipeGroupBy } from "../../outputs/FoodInRecipeGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodInRecipe)
export class GroupByFoodInRecipeResolver {
  @TypeGraphQL.Query(_returns => [FoodInRecipeGroupBy], {
    nullable: false
  })
  async groupByFoodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFoodInRecipeArgs): Promise<FoodInRecipeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
