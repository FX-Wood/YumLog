import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateNestedManyWithoutFoodInput } from "../inputs/FoodInMealCreateNestedManyWithoutFoodInput";
import { FoodInRecipeCreateNestedManyWithoutFoodInput } from "../inputs/FoodInRecipeCreateNestedManyWithoutFoodInput";

@TypeGraphQL.InputType("FoodCreateWithoutNutritionInput", {
  isAbstract: true
})
export class FoodCreateWithoutNutritionInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  brand!: string;

  @TypeGraphQL.Field(_type => FoodInMealCreateNestedManyWithoutFoodInput, {
    nullable: true
  })
  meals?: FoodInMealCreateNestedManyWithoutFoodInput | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateNestedManyWithoutFoodInput, {
    nullable: true
  })
  recipes?: FoodInRecipeCreateNestedManyWithoutFoodInput | undefined;
}
