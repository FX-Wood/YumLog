import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodCreateNestedOneWithoutMealsInput } from "../inputs/FoodCreateNestedOneWithoutMealsInput";
import { UnitCreateNestedOneWithoutMealFoodsInput } from "../inputs/UnitCreateNestedOneWithoutMealFoodsInput";

@TypeGraphQL.InputType("FoodInMealCreateWithoutMealInput", {
  isAbstract: true
})
export class FoodInMealCreateWithoutMealInput {
  @TypeGraphQL.Field(_type => FoodCreateNestedOneWithoutMealsInput, {
    nullable: false
  })
  food!: FoodCreateNestedOneWithoutMealsInput;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantity!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => UnitCreateNestedOneWithoutMealFoodsInput, {
    nullable: false
  })
  unit!: UnitCreateNestedOneWithoutMealFoodsInput;
}
