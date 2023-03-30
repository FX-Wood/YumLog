import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodNutritionAvgAggregate } from "../outputs/FoodNutritionAvgAggregate";
import { FoodNutritionCountAggregate } from "../outputs/FoodNutritionCountAggregate";
import { FoodNutritionMaxAggregate } from "../outputs/FoodNutritionMaxAggregate";
import { FoodNutritionMinAggregate } from "../outputs/FoodNutritionMinAggregate";
import { FoodNutritionSumAggregate } from "../outputs/FoodNutritionSumAggregate";

@TypeGraphQL.ObjectType("FoodNutritionGroupBy", {
  isAbstract: true
})
export class FoodNutritionGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  foodId!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantity!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  unitId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  calories!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  protein!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  fat!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  carbs!: Prisma.Decimal;

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
