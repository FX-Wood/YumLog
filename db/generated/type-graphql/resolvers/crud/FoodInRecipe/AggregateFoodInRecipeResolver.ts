import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFoodInRecipeArgs } from "./args/AggregateFoodInRecipeArgs";
import { FoodInRecipe } from "../../../models/FoodInRecipe";
import { AggregateFoodInRecipe } from "../../outputs/AggregateFoodInRecipe";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodInRecipe)
export class AggregateFoodInRecipeResolver {
  @TypeGraphQL.Query(_returns => AggregateFoodInRecipe, {
    nullable: false
  })
  async aggregateFoodInRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFoodInRecipeArgs): Promise<AggregateFoodInRecipe> {
    return getPrismaFromContext(ctx).foodInRecipe.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
