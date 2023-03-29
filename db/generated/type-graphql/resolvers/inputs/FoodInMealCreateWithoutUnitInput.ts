import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodCreateNestedOneWithoutMealsInput } from "../inputs/FoodCreateNestedOneWithoutMealsInput";
import { MealCreateNestedOneWithoutFoodsInput } from "../inputs/MealCreateNestedOneWithoutFoodsInput";

@TypeGraphQL.InputType("FoodInMealCreateWithoutUnitInput", {
  isAbstract: true
})
export class FoodInMealCreateWithoutUnitInput {
  @TypeGraphQL.Field(_type => FoodCreateNestedOneWithoutMealsInput, {
    nullable: false
  })
  food!: FoodCreateNestedOneWithoutMealsInput;

  @TypeGraphQL.Field(_type => MealCreateNestedOneWithoutFoodsInput, {
    nullable: false
  })
  meal!: MealCreateNestedOneWithoutFoodsInput;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantity!: Prisma.Decimal;
}
