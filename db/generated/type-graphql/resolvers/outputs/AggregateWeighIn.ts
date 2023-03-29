import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeighInAvgAggregate } from "../outputs/WeighInAvgAggregate";
import { WeighInCountAggregate } from "../outputs/WeighInCountAggregate";
import { WeighInMaxAggregate } from "../outputs/WeighInMaxAggregate";
import { WeighInMinAggregate } from "../outputs/WeighInMinAggregate";
import { WeighInSumAggregate } from "../outputs/WeighInSumAggregate";

@TypeGraphQL.ObjectType("AggregateWeighIn", {
  isAbstract: true
})
export class AggregateWeighIn {
  @TypeGraphQL.Field(_type => WeighInCountAggregate, {
    nullable: true
  })
  _count!: WeighInCountAggregate | null;

  @TypeGraphQL.Field(_type => WeighInAvgAggregate, {
    nullable: true
  })
  _avg!: WeighInAvgAggregate | null;

  @TypeGraphQL.Field(_type => WeighInSumAggregate, {
    nullable: true
  })
  _sum!: WeighInSumAggregate | null;

  @TypeGraphQL.Field(_type => WeighInMinAggregate, {
    nullable: true
  })
  _min!: WeighInMinAggregate | null;

  @TypeGraphQL.Field(_type => WeighInMaxAggregate, {
    nullable: true
  })
  _max!: WeighInMaxAggregate | null;
}
