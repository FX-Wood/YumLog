import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFoodNutritionArgs } from "./args/AggregateFoodNutritionArgs";
import { FoodNutrition } from "../../../models/FoodNutrition";
import { AggregateFoodNutrition } from "../../outputs/AggregateFoodNutrition";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodNutrition)
export class AggregateFoodNutritionResolver {
  @TypeGraphQL.Query(_returns => AggregateFoodNutrition, {
    nullable: false
  })
  async aggregateFoodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFoodNutritionArgs): Promise<AggregateFoodNutrition> {
    return getPrismaFromContext(ctx).foodNutrition.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
