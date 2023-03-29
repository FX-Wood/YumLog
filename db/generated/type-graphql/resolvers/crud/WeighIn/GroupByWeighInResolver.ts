import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByWeighInArgs } from "./args/GroupByWeighInArgs";
import { WeighIn } from "../../../models/WeighIn";
import { WeighInGroupBy } from "../../outputs/WeighInGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WeighIn)
export class GroupByWeighInResolver {
  @TypeGraphQL.Query(_returns => [WeighInGroupBy], {
    nullable: false
  })
  async groupByWeighIn(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWeighInArgs): Promise<WeighInGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).weighIn.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
