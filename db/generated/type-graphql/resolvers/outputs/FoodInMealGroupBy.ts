import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealAvgAggregate } from "../outputs/FoodInMealAvgAggregate";
import { FoodInMealCountAggregate } from "../outputs/FoodInMealCountAggregate";
import { FoodInMealMaxAggregate } from "../outputs/FoodInMealMaxAggregate";
import { FoodInMealMinAggregate } from "../outputs/FoodInMealMinAggregate";
import { FoodInMealSumAggregate } from "../outputs/FoodInMealSumAggregate";

@TypeGraphQL.ObjectType("FoodInMealGroupBy", {
  isAbstract: true
})
export class FoodInMealGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  foodId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  mealId!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantity!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  unitId!: number;

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
