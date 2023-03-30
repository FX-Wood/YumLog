import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUnitArgs } from "./args/AggregateUnitArgs";
import { Unit } from "../../../models/Unit";
import { AggregateUnit } from "../../outputs/AggregateUnit";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Unit)
export class AggregateUnitResolver {
  @TypeGraphQL.Query(_returns => AggregateUnit, {
    nullable: false
  })
  async aggregateUnit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUnitArgs): Promise<AggregateUnit> {
    return getPrismaFromContext(ctx).unit.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
