import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateNestedManyWithoutUnitInput } from "../inputs/FoodInMealCreateNestedManyWithoutUnitInput";
import { FoodInRecipeCreateNestedManyWithoutUnitInput } from "../inputs/FoodInRecipeCreateNestedManyWithoutUnitInput";
import { RecipeInMealCreateNestedManyWithoutUnitInput } from "../inputs/RecipeInMealCreateNestedManyWithoutUnitInput";

@TypeGraphQL.InputType("UnitCreateWithoutFoodNutritionInput", {
  isAbstract: true
})
export class UnitCreateWithoutFoodNutritionInput {
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

  @TypeGraphQL.Field(_type => RecipeInMealCreateNestedManyWithoutUnitInput, {
    nullable: true
  })
  mealRecipe?: RecipeInMealCreateNestedManyWithoutUnitInput | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateNestedManyWithoutUnitInput, {
    nullable: true
  })
  recipeFoods?: FoodInRecipeCreateNestedManyWithoutUnitInput | undefined;
}
