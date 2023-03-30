import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealUpdateManyWithoutFoodNestedInput } from "../inputs/FoodInMealUpdateManyWithoutFoodNestedInput";
import { FoodNutritionUpdateManyWithoutFoodNestedInput } from "../inputs/FoodNutritionUpdateManyWithoutFoodNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FoodUpdateWithoutRecipesInput", {
  isAbstract: true
})
export class FoodUpdateWithoutRecipesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  brand?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FoodNutritionUpdateManyWithoutFoodNestedInput, {
    nullable: true
  })
  nutrition?: FoodNutritionUpdateManyWithoutFoodNestedInput | undefined;

  @TypeGraphQL.Field(_type => FoodInMealUpdateManyWithoutFoodNestedInput, {
    nullable: true
  })
  meals?: FoodInMealUpdateManyWithoutFoodNestedInput | undefined;
}
