import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateFoodInMealArgs } from "./args/AggregateFoodInMealArgs";
import { FoodInMeal } from "../../../models/FoodInMeal";
import { AggregateFoodInMeal } from "../../outputs/AggregateFoodInMeal";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodInMeal)
export class AggregateFoodInMealResolver {
  @TypeGraphQL.Query(_returns => AggregateFoodInMeal, {
    nullable: false
  })
  async aggregateFoodInMeal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFoodInMealArgs): Promise<AggregateFoodInMeal> {
    return getPrismaFromContext(ctx).foodInMeal.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
