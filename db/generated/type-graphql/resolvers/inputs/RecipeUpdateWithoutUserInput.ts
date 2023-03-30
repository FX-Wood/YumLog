import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeUpdateManyWithoutRecipeNestedInput } from "../inputs/FoodInRecipeUpdateManyWithoutRecipeNestedInput";
import { RecipeInMealUpdateManyWithoutRecipeNestedInput } from "../inputs/RecipeInMealUpdateManyWithoutRecipeNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("RecipeUpdateWithoutUserInput", {
  isAbstract: true
})
export class RecipeUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeUpdateManyWithoutRecipeNestedInput, {
    nullable: true
  })
  foods?: FoodInRecipeUpdateManyWithoutRecipeNestedInput | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealUpdateManyWithoutRecipeNestedInput, {
    nullable: true
  })
  meals?: RecipeInMealUpdateManyWithoutRecipeNestedInput | undefined;
}
