import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueFoodNutritionOrThrowArgs } from "./args/FindUniqueFoodNutritionOrThrowArgs";
import { FoodNutrition } from "../../../models/FoodNutrition";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodNutrition)
export class FindUniqueFoodNutritionOrThrowResolver {
  @TypeGraphQL.Query(_returns => FoodNutrition, {
    nullable: true
  })
  async getFoodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFoodNutritionOrThrowArgs): Promise<FoodNutrition | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodNutrition.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
