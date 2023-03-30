import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodNutritionAvgAggregate } from "../outputs/FoodNutritionAvgAggregate";
import { FoodNutritionCountAggregate } from "../outputs/FoodNutritionCountAggregate";
import { FoodNutritionMaxAggregate } from "../outputs/FoodNutritionMaxAggregate";
import { FoodNutritionMinAggregate } from "../outputs/FoodNutritionMinAggregate";
import { FoodNutritionSumAggregate } from "../outputs/FoodNutritionSumAggregate";

@TypeGraphQL.ObjectType("AggregateFoodNutrition", {
  isAbstract: true
})
export class AggregateFoodNutrition {
  @TypeGraphQL.Field(_type => FoodNutritionCountAggregate, {
    nullable: true
  })
  _count!: FoodNutritionCountAggregate | null;

  @TypeGraphQL.Field(_type => FoodNutritionAvgAggregate, {
    nullable: true
  })
  _avg!: FoodNutritionAvgAggregate | null;

  @TypeGraphQL.Field(_type => FoodNutritionSumAggregate, {
    nullable: true
  })
  _sum!: FoodNutritionSumAggregate | null;

  @TypeGraphQL.Field(_type => FoodNutritionMinAggregate, {
    nullable: true
  })
  _min!: FoodNutritionMinAggregate | null;

  @TypeGraphQL.Field(_type => FoodNutritionMaxAggregate, {
    nullable: true
  })
  _max!: FoodNutritionMaxAggregate | null;
}
