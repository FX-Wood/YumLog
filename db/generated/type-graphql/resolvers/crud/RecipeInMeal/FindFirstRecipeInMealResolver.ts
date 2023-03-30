import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstRecipeInMealArgs } from "./args/FindFirstRecipeInMealArgs";
import { RecipeInMeal } from "../../../models/RecipeInMeal";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RecipeInMeal)
export class FindFirstRecipeInMealResolver {
  @TypeGraphQL.Query(_returns => RecipeInMeal, {
    nullable: true
  })
  async findFirstRecipeInMeal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstRecipeInMealArgs): Promise<RecipeInMeal | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).recipeInMeal.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
