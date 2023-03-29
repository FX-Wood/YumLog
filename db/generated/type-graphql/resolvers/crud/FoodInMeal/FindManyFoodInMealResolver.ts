import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyFoodInMealArgs } from "./args/FindManyFoodInMealArgs";
import { FoodInMeal } from "../../../models/FoodInMeal";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodInMeal)
export class FindManyFoodInMealResolver {
  @TypeGraphQL.Query(_returns => [FoodInMeal], {
    nullable: false
  })
  async foodInMeals(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyFoodInMealArgs): Promise<FoodInMeal[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodInMeal.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
