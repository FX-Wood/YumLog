import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { MealUpdateOneRequiredWithoutRecipesNestedInput } from "../inputs/MealUpdateOneRequiredWithoutRecipesNestedInput";
import { RecipeUpdateOneRequiredWithoutMealsNestedInput } from "../inputs/RecipeUpdateOneRequiredWithoutMealsNestedInput";

@TypeGraphQL.InputType("RecipeInMealUpdateWithoutUnitInput", {
  isAbstract: true
})
export class RecipeInMealUpdateWithoutUnitInput {
  @TypeGraphQL.Field(_type => RecipeUpdateOneRequiredWithoutMealsNestedInput, {
    nullable: true
  })
  recipe?: RecipeUpdateOneRequiredWithoutMealsNestedInput | undefined;

  @TypeGraphQL.Field(_type => MealUpdateOneRequiredWithoutRecipesNestedInput, {
    nullable: true
  })
  meal?: MealUpdateOneRequiredWithoutRecipesNestedInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  quantity?: DecimalFieldUpdateOperationsInput | undefined;
}
