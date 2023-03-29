import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateNestedManyWithoutMealInput } from "../inputs/FoodInMealCreateNestedManyWithoutMealInput";
import { MealType } from "../../enums/MealType";

@TypeGraphQL.InputType("MealCreateWithoutUserInput", {
  isAbstract: true
})
export class MealCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => MealType, {
    nullable: false
  })
  mealType!: "BREAKFAST" | "LUNCH" | "DINNER" | "SNACK";

  @TypeGraphQL.Field(_type => FoodInMealCreateNestedManyWithoutMealInput, {
    nullable: true
  })
  foods?: FoodInMealCreateNestedManyWithoutMealInput | undefined;
}
