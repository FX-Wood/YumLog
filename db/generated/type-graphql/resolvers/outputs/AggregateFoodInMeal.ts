import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealAvgAggregate } from "../outputs/FoodInMealAvgAggregate";
import { FoodInMealCountAggregate } from "../outputs/FoodInMealCountAggregate";
import { FoodInMealMaxAggregate } from "../outputs/FoodInMealMaxAggregate";
import { FoodInMealMinAggregate } from "../outputs/FoodInMealMinAggregate";
import { FoodInMealSumAggregate } from "../outputs/FoodInMealSumAggregate";

@TypeGraphQL.ObjectType("AggregateFoodInMeal", {
  isAbstract: true
})
export class AggregateFoodInMeal {
  @TypeGraphQL.Field(_type => FoodInMealCountAggregate, {
    nullable: true
  })
  _count!: FoodInMealCountAggregate | null;

  @TypeGraphQL.Field(_type => FoodInMealAvgAggregate, {
    nullable: true
  })
  _avg!: FoodInMealAvgAggregate | null;

  @TypeGraphQL.Field(_type => FoodInMealSumAggregate, {
    nullable: true
  })
  _sum!: FoodInMealSumAggregate | null;

  @TypeGraphQL.Field(_type => FoodInMealMinAggregate, {
    nullable: true
  })
  _min!: FoodInMealMinAggregate | null;

  @TypeGraphQL.Field(_type => FoodInMealMaxAggregate, {
    nullable: true
  })
  _max!: FoodInMealMaxAggregate | null;
}
