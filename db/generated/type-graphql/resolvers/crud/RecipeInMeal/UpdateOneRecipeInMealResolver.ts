import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneRecipeInMealArgs } from "./args/UpdateOneRecipeInMealArgs";
import { RecipeInMeal } from "../../../models/RecipeInMeal";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RecipeInMeal)
export class UpdateOneRecipeInMealResolver {
  @TypeGraphQL.Mutation(_returns => RecipeInMeal, {
    nullable: true
  })
  async updateOneRecipeInMeal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneRecipeInMealArgs): Promise<RecipeInMeal | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).recipeInMeal.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
