import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateNestedManyWithoutFoodInput } from "../inputs/FoodInMealCreateNestedManyWithoutFoodInput";
import { FoodNutritionCreateNestedManyWithoutFoodInput } from "../inputs/FoodNutritionCreateNestedManyWithoutFoodInput";

@TypeGraphQL.InputType("FoodCreateWithoutRecipesInput", {
  isAbstract: true
})
export class FoodCreateWithoutRecipesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  brand!: string;

  @TypeGraphQL.Field(_type => FoodNutritionCreateNestedManyWithoutFoodInput, {
    nullable: true
  })
  nutrition?: FoodNutritionCreateNestedManyWithoutFoodInput | undefined;

  @TypeGraphQL.Field(_type => FoodInMealCreateNestedManyWithoutFoodInput, {
    nullable: true
  })
  meals?: FoodInMealCreateNestedManyWithoutFoodInput | undefined;
}
