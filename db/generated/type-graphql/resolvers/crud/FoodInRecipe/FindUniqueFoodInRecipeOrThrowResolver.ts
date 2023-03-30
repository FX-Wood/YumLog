import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueFoodInRecipeOrThrowArgs } from "./args/FindUniqueFoodInRecipeOrThrowArgs";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodInRecipe)
export class FindUniqueFoodInRecipeOrThrowResolver {
  @TypeGraphQL.Query(_returns => FoodInRecipe, {
    nullable: true
  })
  async getFoodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFoodInRecipeOrThrowArgs): Promise<FoodInRecipe | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).foodInRecipe.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
