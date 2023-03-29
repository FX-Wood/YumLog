import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodAvgAggregate } from "../outputs/FoodAvgAggregate";
import { FoodCountAggregate } from "../outputs/FoodCountAggregate";
import { FoodMaxAggregate } from "../outputs/FoodMaxAggregate";
import { FoodMinAggregate } from "../outputs/FoodMinAggregate";
import { FoodSumAggregate } from "../outputs/FoodSumAggregate";

@TypeGraphQL.ObjectType("AggregateFood", {
  isAbstract: true
})
export class AggregateFood {
  @TypeGraphQL.Field(_type => FoodCountAggregate, {
    nullable: true
  })
  _count!: FoodCountAggregate | null;

  @TypeGraphQL.Field(_type => FoodAvgAggregate, {
    nullable: true
  })
  _avg!: FoodAvgAggregate | null;

  @TypeGraphQL.Field(_type => FoodSumAggregate, {
    nullable: true
  })
  _sum!: FoodSumAggregate | null;

  @TypeGraphQL.Field(_type => FoodMinAggregate, {
    nullable: true
  })
  _min!: FoodMinAggregate | null;

  @TypeGraphQL.Field(_type => FoodMaxAggregate, {
    nullable: true
  })
  _max!: FoodMaxAggregate | null;
}
