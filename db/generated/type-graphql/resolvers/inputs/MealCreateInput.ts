import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateNestedManyWithoutMealInput } from "../inputs/FoodInMealCreateNestedManyWithoutMealInput";
import { RecipeInMealCreateNestedManyWithoutMealInput } from "../inputs/RecipeInMealCreateNestedManyWithoutMealInput";
import { UserCreateNestedOneWithoutMealsInput } from "../inputs/UserCreateNestedOneWithoutMealsInput";
import { MealType } from "../../enums/MealType";

@TypeGraphQL.InputType("MealCreateInput", {
  isAbstract: true
})
export class MealCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMealsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutMealsInput;

  @TypeGraphQL.Field(_type => MealType, {
    nullable: false
  })
  mealType!: "BREAKFAST" | "LUNCH" | "DINNER" | "SNACK";

  @TypeGraphQL.Field(_type => FoodInMealCreateNestedManyWithoutMealInput, {
    nullable: true
  })
  foods?: FoodInMealCreateNestedManyWithoutMealInput | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealCreateNestedManyWithoutMealInput, {
    nullable: true
  })
  recipes?: RecipeInMealCreateNestedManyWithoutMealInput | undefined;
}
