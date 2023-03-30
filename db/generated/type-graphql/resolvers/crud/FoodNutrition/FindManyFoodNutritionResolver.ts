import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyFoodNutritionArgs } from "./args/FindManyFoodNutritionArgs";
import { FoodNutrition } from "../../../models/FoodNutrition";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodNutrition)
export class FindManyFoodNutritionResolver {
  @TypeGraphQL.Query(_returns => [FoodNutrition], {
    nullable: false
  })
  async foodNutritions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyFoodNutritionArgs): Promise<FoodNutrition[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodNutrition.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
