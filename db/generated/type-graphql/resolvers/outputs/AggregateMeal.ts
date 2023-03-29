import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealAvgAggregate } from "../outputs/MealAvgAggregate";
import { MealCountAggregate } from "../outputs/MealCountAggregate";
import { MealMaxAggregate } from "../outputs/MealMaxAggregate";
import { MealMinAggregate } from "../outputs/MealMinAggregate";
import { MealSumAggregate } from "../outputs/MealSumAggregate";

@TypeGraphQL.ObjectType("AggregateMeal", {
  isAbstract: true
})
export class AggregateMeal {
  @TypeGraphQL.Field(_type => MealCountAggregate, {
    nullable: true
  })
  _count!: MealCountAggregate | null;

  @TypeGraphQL.Field(_type => MealAvgAggregate, {
    nullable: true
  })
  _avg!: MealAvgAggregate | null;

  @TypeGraphQL.Field(_type => MealSumAggregate, {
    nullable: true
  })
  _sum!: MealSumAggregate | null;

  @TypeGraphQL.Field(_type => MealMinAggregate, {
    nullable: true
  })
  _min!: MealMinAggregate | null;

  @TypeGraphQL.Field(_type => MealMaxAggregate, {
    nullable: true
  })
  _max!: MealMaxAggregate | null;
}
