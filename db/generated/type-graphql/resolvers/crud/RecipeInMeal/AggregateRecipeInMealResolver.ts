import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRecipeInMealArgs } from "./args/AggregateRecipeInMealArgs";
import { RecipeInMeal } from "../../../models/RecipeInMeal";
import { AggregateRecipeInMeal } from "../../outputs/AggregateRecipeInMeal";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RecipeInMeal)
export class AggregateRecipeInMealResolver {
  @TypeGraphQL.Query(_returns => AggregateRecipeInMeal, {
    nullable: false
  })
  async aggregateRecipeInMeal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRecipeInMealArgs): Promise<AggregateRecipeInMeal> {
    return getPrismaFromContext(ctx).recipeInMeal.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
