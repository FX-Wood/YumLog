import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneFoodInMealArgs } from "./args/UpdateOneFoodInMealArgs";
import { FoodInMeal } from "../../../models/FoodInMeal";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodInMeal)
export class UpdateOneFoodInMealResolver {
  @TypeGraphQL.Mutation(_returns => FoodInMeal, {
    nullable: true
  })
  async updateOneFoodInMeal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneFoodInMealArgs): Promise<FoodInMeal | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodInMeal.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
