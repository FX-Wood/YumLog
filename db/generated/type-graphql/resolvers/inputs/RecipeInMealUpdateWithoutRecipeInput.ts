import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { MealUpdateOneRequiredWithoutRecipesNestedInput } from "../inputs/MealUpdateOneRequiredWithoutRecipesNestedInput";
import { UnitUpdateOneRequiredWithoutMealRecipeNestedInput } from "../inputs/UnitUpdateOneRequiredWithoutMealRecipeNestedInput";

@TypeGraphQL.InputType("RecipeInMealUpdateWithoutRecipeInput", {
  isAbstract: true
})
export class RecipeInMealUpdateWithoutRecipeInput {
  @TypeGraphQL.Field(_type => MealUpdateOneRequiredWithoutRecipesNestedInput, {
    nullable: true
  })
  meal?: MealUpdateOneRequiredWithoutRecipesNestedInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  quantity?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UnitUpdateOneRequiredWithoutMealRecipeNestedInput, {
    nullable: true
  })
  unit?: UnitUpdateOneRequiredWithoutMealRecipeNestedInput | undefined;
}
