import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneFoodInMealArgs } from "./args/UpdateOneFoodInMealArgs";
import { FoodInMeal } from "../../../models/FoodInMeal";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodInMeal)
export class UpdateOneFoodInMealResolver {
  @TypeGraphQL.Mutation(_returns => FoodInMeal, {
    nullable: true
  })
  async updateOneFoodInMeal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneFoodInMealArgs): Promise<FoodInMeal | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInMeal.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
