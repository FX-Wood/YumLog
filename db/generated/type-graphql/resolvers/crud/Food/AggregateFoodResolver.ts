import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateFoodArgs } from "./args/AggregateFoodArgs";
import { Food } from "../../../models/Food";
import { AggregateFood } from "../../outputs/AggregateFood";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Food)
export class AggregateFoodResolver {
  @TypeGraphQL.Query(_returns => AggregateFood, {
    nullable: false
  })
  async aggregateFood(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFoodArgs): Promise<AggregateFood> {
    return getPrismaFromContext(ctx).food.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
