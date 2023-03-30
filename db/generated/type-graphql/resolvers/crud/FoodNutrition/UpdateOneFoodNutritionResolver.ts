import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneFoodNutritionArgs } from "./args/UpdateOneFoodNutritionArgs";
import { FoodNutrition } from "../../../models/FoodNutrition";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodNutrition)
export class UpdateOneFoodNutritionResolver {
  @TypeGraphQL.Mutation(_returns => FoodNutrition, {
    nullable: true
  })
  async updateOneFoodNutrition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneFoodNutritionArgs): Promise<FoodNutrition | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodNutrition.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
