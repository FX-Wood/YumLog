import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstFoodInRecipeArgs } from "./args/FindFirstFoodInRecipeArgs";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodInRecipe)
export class FindFirstFoodInRecipeResolver {
  @TypeGraphQL.Query(_returns => FoodInRecipe, {
    nullable: true
  })
  async findFirstFoodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFoodInRecipeArgs): Promise<FoodInRecipe | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodInRecipe.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
