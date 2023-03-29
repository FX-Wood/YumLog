import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstFoodInMealArgs } from "./args/FindFirstFoodInMealArgs";
import { FoodInMeal } from "../../../models/FoodInMeal";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodInMeal)
export class FindFirstFoodInMealResolver {
  @TypeGraphQL.Query(_returns => FoodInMeal, {
    nullable: true
  })
  async findFirstFoodInMeal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFoodInMealArgs): Promise<FoodInMeal | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodInMeal.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
