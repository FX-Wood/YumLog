import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWeighInArgs } from "./args/AggregateWeighInArgs";
import { WeighIn } from "../../../models/WeighIn";
import { AggregateWeighIn } from "../../outputs/AggregateWeighIn";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WeighIn)
export class AggregateWeighInResolver {
  @TypeGraphQL.Query(_returns => AggregateWeighIn, {
    nullable: false
  })
  async aggregateWeighIn(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWeighInArgs): Promise<AggregateWeighIn> {
    return getPrismaFromContext(ctx).weighIn.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
