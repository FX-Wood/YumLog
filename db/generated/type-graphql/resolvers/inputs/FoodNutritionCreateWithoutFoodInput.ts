import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateNestedOneWithoutFoodNutritionInput } from "../inputs/UnitCreateNestedOneWithoutFoodNutritionInput";

@TypeGraphQL.InputType("FoodNutritionCreateWithoutFoodInput", {
  isAbstract: true
})
export class FoodNutritionCreateWithoutFoodInput {
  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantity!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => UnitCreateNestedOneWithoutFoodNutritionInput, {
    nullable: false
  })
  unit!: UnitCreateNestedOneWithoutFoodNutritionInput;

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
