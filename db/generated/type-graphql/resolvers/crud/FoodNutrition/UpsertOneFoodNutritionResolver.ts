import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneFoodNutritionArgs } from "./args/UpsertOneFoodNutritionArgs";
import { FoodNutrition } from "../../../models/FoodNutrition";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodNutrition)
export class UpsertOneFoodNutritionResolver {
  @TypeGraphQL.Mutation(_returns => FoodNutrition, {
    nullable: false
  })
  async upsertOneFoodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneFoodNutritionArgs): Promise<FoodNutrition> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodNutrition.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
