import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWorkoutArgs } from "./args/AggregateWorkoutArgs";
import { Workout } from "../../../models/Workout";
import { AggregateWorkout } from "../../outputs/AggregateWorkout";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Workout)
export class AggregateWorkoutResolver {
  @TypeGraphQL.Query(_returns => AggregateWorkout, {
    nullable: false
  })
  async aggregateWorkout(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWorkoutArgs): Promise<AggregateWorkout> {
    return getPrismaFromContext(ctx).workout.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
