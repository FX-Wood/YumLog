import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyFoodInRecipeArgs } from "./args/FindManyFoodInRecipeArgs";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodInRecipe)
export class FindManyFoodInRecipeResolver {
  @TypeGraphQL.Query(_returns => [FoodInRecipe], {
    nullable: false
  })
  async foodInRecipes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyFoodInRecipeArgs): Promise<FoodInRecipe[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodInRecipe.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
