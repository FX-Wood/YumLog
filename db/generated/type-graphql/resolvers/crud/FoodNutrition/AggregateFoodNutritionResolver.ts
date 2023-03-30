import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateFoodNutritionArgs } from "./args/AggregateFoodNutritionArgs";
import { FoodNutrition } from "../../../models/FoodNutrition";
import { AggregateFoodNutrition } from "../../outputs/AggregateFoodNutrition";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodNutrition)
export class AggregateFoodNutritionResolver {
  @TypeGraphQL.Query(_returns => AggregateFoodNutrition, {
    nullable: false
  })
  async aggregateFoodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFoodNutritionArgs): Promise<AggregateFoodNutrition> {
    return getPrismaFromContext(ctx).foodNutrition.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
