import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMealArgs } from "./args/AggregateMealArgs";
import { Meal } from "../../../models/Meal";
import { AggregateMeal } from "../../outputs/AggregateMeal";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Meal)
export class AggregateMealResolver {
  @TypeGraphQL.Query(_returns => AggregateMeal, {
    nullable: false
  })
  async aggregateMeal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMealArgs): Promise<AggregateMeal> {
    return getPrismaFromContext(ctx).meal.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
