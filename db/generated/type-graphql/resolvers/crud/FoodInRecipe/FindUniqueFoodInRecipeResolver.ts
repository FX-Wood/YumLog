import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueFoodInRecipeArgs } from "./args/FindUniqueFoodInRecipeArgs";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodInRecipe)
export class FindUniqueFoodInRecipeResolver {
  @TypeGraphQL.Query(_returns => FoodInRecipe, {
    nullable: true
  })
  async foodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFoodInRecipeArgs): Promise<FoodInRecipe | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
