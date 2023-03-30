import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstFoodNutritionArgs } from "./args/FindFirstFoodNutritionArgs";
import { FoodNutrition } from "../../../models/FoodNutrition";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodNutrition)
export class FindFirstFoodNutritionResolver {
  @TypeGraphQL.Query(_returns => FoodNutrition, {
    nullable: true
  })
  async findFirstFoodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFoodNutritionArgs): Promise<FoodNutrition | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodNutrition.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
