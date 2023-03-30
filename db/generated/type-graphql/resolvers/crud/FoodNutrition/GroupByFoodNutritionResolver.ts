import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByFoodNutritionArgs } from "./args/GroupByFoodNutritionArgs";
import { FoodNutrition } from "../../../models/FoodNutrition";
import { FoodNutritionGroupBy } from "../../outputs/FoodNutritionGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodNutrition)
export class GroupByFoodNutritionResolver {
  @TypeGraphQL.Query(_returns => [FoodNutritionGroupBy], {
    nullable: false
  })
  async groupByFoodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFoodNutritionArgs): Promise<FoodNutritionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodNutrition.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
