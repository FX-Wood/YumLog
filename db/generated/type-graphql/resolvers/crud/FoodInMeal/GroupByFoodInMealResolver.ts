import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByFoodInMealArgs } from "./args/GroupByFoodInMealArgs";
import { FoodInMeal } from "../../../models/FoodInMeal";
import { FoodInMealGroupBy } from "../../outputs/FoodInMealGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodInMeal)
export class GroupByFoodInMealResolver {
  @TypeGraphQL.Query(_returns => [FoodInMealGroupBy], {
    nullable: false
  })
  async groupByFoodInMeal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFoodInMealArgs): Promise<FoodInMealGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInMeal.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
