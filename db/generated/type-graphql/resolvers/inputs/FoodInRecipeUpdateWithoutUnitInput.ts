import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { FoodUpdateOneRequiredWithoutRecipesNestedInput } from "../inputs/FoodUpdateOneRequiredWithoutRecipesNestedInput";
import { RecipeUpdateOneRequiredWithoutFoodsNestedInput } from "../inputs/RecipeUpdateOneRequiredWithoutFoodsNestedInput";

@TypeGraphQL.InputType("FoodInRecipeUpdateWithoutUnitInput", {
  isAbstract: true
})
export class FoodInRecipeUpdateWithoutUnitInput {
  @TypeGraphQL.Field(_type => FoodUpdateOneRequiredWithoutRecipesNestedInput, {
    nullable: true
  })
  food?: FoodUpdateOneRequiredWithoutRecipesNestedInput | undefined;

  @TypeGraphQL.Field(_type => RecipeUpdateOneRequiredWithoutFoodsNestedInput, {
    nullable: true
  })
  recipe?: RecipeUpdateOneRequiredWithoutFoodsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  quantity?: DecimalFieldUpdateOperationsInput | undefined;
}
