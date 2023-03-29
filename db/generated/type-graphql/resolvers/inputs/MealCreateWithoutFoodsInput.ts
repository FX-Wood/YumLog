import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutMealsInput } from "../inputs/UserCreateNestedOneWithoutMealsInput";
import { MealType } from "../../enums/MealType";

@TypeGraphQL.InputType("MealCreateWithoutFoodsInput", {
  isAbstract: true
})
export class MealCreateWithoutFoodsInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMealsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutMealsInput;

  @TypeGraphQL.Field(_type => MealType, {
    nullable: false
  })
  mealType!: "BREAKFAST" | "LUNCH" | "DINNER" | "SNACK";
}
