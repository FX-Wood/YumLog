import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealCreateNestedOneWithoutFoodsInput } from "../inputs/MealCreateNestedOneWithoutFoodsInput";
import { UnitCreateNestedOneWithoutMealFoodsInput } from "../inputs/UnitCreateNestedOneWithoutMealFoodsInput";

@TypeGraphQL.InputType("FoodInMealCreateWithoutFoodInput", {
  isAbstract: true
})
export class FoodInMealCreateWithoutFoodInput {
  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantity!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => MealCreateNestedOneWithoutFoodsInput, {
    nullable: false
  })
  meal!: MealCreateNestedOneWithoutFoodsInput;

  @TypeGraphQL.Field(_type => UnitCreateNestedOneWithoutMealFoodsInput, {
    nullable: false
  })
  unit!: UnitCreateNestedOneWithoutMealFoodsInput;
}
