import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Food } from "../models/Food";
import { Unit } from "../models/Unit";

@TypeGraphQL.ObjectType("FoodNutrition", {
  isAbstract: true
})
export class FoodNutrition {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  food?: Food;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  foodId!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantity!: Prisma.Decimal;

  unit?: Unit;

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
}
