import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyRecipeInMealArgs } from "./args/FindManyRecipeInMealArgs";
import { RecipeInMeal } from "../../../models/RecipeInMeal";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RecipeInMeal)
export class FindManyRecipeInMealResolver {
  @TypeGraphQL.Query(_returns => [RecipeInMeal], {
    nullable: false
  })
  async recipeInMeals(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyRecipeInMealArgs): Promise<RecipeInMeal[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).recipeInMeal.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
