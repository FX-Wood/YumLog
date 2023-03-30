import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneFoodNutritionArgs } from "./args/CreateOneFoodNutritionArgs";
import { FoodNutrition } from "../../../models/FoodNutrition";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodNutrition)
export class CreateOneFoodNutritionResolver {
  @TypeGraphQL.Mutation(_returns => FoodNutrition, {
    nullable: false
  })
  async createOneFoodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneFoodNutritionArgs): Promise<FoodNutrition> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodNutrition.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
