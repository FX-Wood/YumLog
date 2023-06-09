import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodCreateNestedOneWithoutNutritionInput } from "../inputs/FoodCreateNestedOneWithoutNutritionInput";

@TypeGraphQL.InputType("FoodNutritionCreateWithoutUnitInput", {
  isAbstract: true
})
export class FoodNutritionCreateWithoutUnitInput {
  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantity!: Prisma.Decimal;

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

  @TypeGraphQL.Field(_type => FoodCreateNestedOneWithoutNutritionInput, {
    nullable: false
  })
  food!: FoodCreateNestedOneWithoutNutritionInput;
}
