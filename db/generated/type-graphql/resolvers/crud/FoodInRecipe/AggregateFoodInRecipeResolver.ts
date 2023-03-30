import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateFoodInRecipeArgs } from "./args/AggregateFoodInRecipeArgs";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { AggregateFoodInRecipe } from "../../outputs/AggregateFoodInRecipe";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodInRecipe)
export class AggregateFoodInRecipeResolver {
  @TypeGraphQL.Query(_returns => AggregateFoodInRecipe, {
    nullable: false
  })
  async aggregateFoodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFoodInRecipeArgs): Promise<AggregateFoodInRecipe> {
    return getPrismaFromContext(ctx).foodInRecipe.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
