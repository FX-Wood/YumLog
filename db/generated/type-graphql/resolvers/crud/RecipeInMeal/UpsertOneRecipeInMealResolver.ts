import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneRecipeInMealArgs } from "./args/UpsertOneRecipeInMealArgs";
import { RecipeInMeal } from "../../../models/RecipeInMeal";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RecipeInMeal)
export class UpsertOneRecipeInMealResolver {
  @TypeGraphQL.Mutation(_returns => RecipeInMeal, {
    nullable: false
  })
  async upsertOneRecipeInMeal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneRecipeInMealArgs): Promise<RecipeInMeal> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).recipeInMeal.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
