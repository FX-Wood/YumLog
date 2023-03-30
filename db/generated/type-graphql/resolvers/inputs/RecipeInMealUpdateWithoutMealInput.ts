import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { RecipeUpdateOneRequiredWithoutMealsNestedInput } from "../inputs/RecipeUpdateOneRequiredWithoutMealsNestedInput";
import { UnitUpdateOneRequiredWithoutMealRecipeNestedInput } from "../inputs/UnitUpdateOneRequiredWithoutMealRecipeNestedInput";

@TypeGraphQL.InputType("RecipeInMealUpdateWithoutMealInput", {
  isAbstract: true
})
export class RecipeInMealUpdateWithoutMealInput {
  @TypeGraphQL.Field(_type => RecipeUpdateOneRequiredWithoutMealsNestedInput, {
    nullable: true
  })
  recipe?: RecipeUpdateOneRequiredWithoutMealsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  quantity?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UnitUpdateOneRequiredWithoutMealRecipeNestedInput, {
    nullable: true
  })
  unit?: UnitUpdateOneRequiredWithoutMealRecipeNestedInput | undefined;
}
