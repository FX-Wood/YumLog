import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneRecipeInMealArgs } from "./args/CreateOneRecipeInMealArgs";
import { RecipeInMeal } from "../../../models/RecipeInMeal";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RecipeInMeal)
export class CreateOneRecipeInMealResolver {
  @TypeGraphQL.Mutation(_returns => RecipeInMeal, {
    nullable: false
  })
  async createOneRecipeInMeal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneRecipeInMealArgs): Promise<RecipeInMeal> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).recipeInMeal.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
