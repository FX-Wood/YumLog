import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkoutAvgAggregate } from "../outputs/WorkoutAvgAggregate";
import { WorkoutCountAggregate } from "../outputs/WorkoutCountAggregate";
import { WorkoutMaxAggregate } from "../outputs/WorkoutMaxAggregate";
import { WorkoutMinAggregate } from "../outputs/WorkoutMinAggregate";
import { WorkoutSumAggregate } from "../outputs/WorkoutSumAggregate";

@TypeGraphQL.ObjectType("WorkoutGroupBy", {
  isAbstract: true
})
export class WorkoutGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  calories!: number;

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
