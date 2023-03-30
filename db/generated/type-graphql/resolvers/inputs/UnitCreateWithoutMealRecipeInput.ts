import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateNestedManyWithoutUnitInput } from "../inputs/FoodInMealCreateNestedManyWithoutUnitInput";
import { FoodInRecipeCreateNestedManyWithoutUnitInput } from "../inputs/FoodInRecipeCreateNestedManyWithoutUnitInput";
import { FoodNutritionCreateNestedManyWithoutUnitInput } from "../inputs/FoodNutritionCreateNestedManyWithoutUnitInput";

@TypeGraphQL.InputType("UnitCreateWithoutMealRecipeInput", {
  isAbstract: true
})
export class UnitCreateWithoutMealRecipeInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shortname!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  volume!: boolean;

  @TypeGraphQL.Field(_type => FoodInMealCreateNestedManyWithoutUnitInput, {
    nullable: true
  })
  mealFoods?: FoodInMealCreateNestedManyWithoutUnitInput | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateNestedManyWithoutUnitInput, {
    nullable: true
  })
  recipeFoods?: FoodInRecipeCreateNestedManyWithoutUnitInput | undefined;

  @TypeGraphQL.Field(_type => FoodNutritionCreateNestedManyWithoutUnitInput, {
    nullable: true
  })
  foodNutrition?: FoodNutritionCreateNestedManyWithoutUnitInput | undefined;
}
