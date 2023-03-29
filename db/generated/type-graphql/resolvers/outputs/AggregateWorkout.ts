import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkoutAvgAggregate } from "../outputs/WorkoutAvgAggregate";
import { WorkoutCountAggregate } from "../outputs/WorkoutCountAggregate";
import { WorkoutMaxAggregate } from "../outputs/WorkoutMaxAggregate";
import { WorkoutMinAggregate } from "../outputs/WorkoutMinAggregate";
import { WorkoutSumAggregate } from "../outputs/WorkoutSumAggregate";

@TypeGraphQL.ObjectType("AggregateWorkout", {
  isAbstract: true
})
export class AggregateWorkout {
  @TypeGraphQL.Field(_type => WorkoutCountAggregate, {
    nullable: true
  })
  _count!: WorkoutCountAggregate | null;

  @TypeGraphQL.Field(_type => WorkoutAvgAggregate, {
    nullable: true
  })
  _avg!: WorkoutAvgAggregate | null;

  @TypeGraphQL.Field(_type => WorkoutSumAggregate, {
    nullable: true
  })
  _sum!: WorkoutSumAggregate | null;

  @TypeGraphQL.Field(_type => WorkoutMinAggregate, {
    nullable: true
  })
  _min!: WorkoutMinAggregate | null;

  @TypeGraphQL.Field(_type => WorkoutMaxAggregate, {
    nullable: true
  })
  _max!: WorkoutMaxAggregate | null;
}
