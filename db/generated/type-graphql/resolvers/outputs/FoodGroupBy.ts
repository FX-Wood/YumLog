import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodAvgAggregate } from "../outputs/FoodAvgAggregate";
import { FoodCountAggregate } from "../outputs/FoodCountAggregate";
import { FoodMaxAggregate } from "../outputs/FoodMaxAggregate";
import { FoodMinAggregate } from "../outputs/FoodMinAggregate";
import { FoodSumAggregate } from "../outputs/FoodSumAggregate";

@TypeGraphQL.ObjectType("FoodGroupBy", {
  isAbstract: true
})
export class FoodGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  brand!: string;

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
