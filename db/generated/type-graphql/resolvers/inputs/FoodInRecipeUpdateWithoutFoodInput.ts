import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { RecipeUpdateOneRequiredWithoutFoodsNestedInput } from "../inputs/RecipeUpdateOneRequiredWithoutFoodsNestedInput";
import { UnitUpdateOneRequiredWithoutRecipeFoodsNestedInput } from "../inputs/UnitUpdateOneRequiredWithoutRecipeFoodsNestedInput";

@TypeGraphQL.InputType("FoodInRecipeUpdateWithoutFoodInput", {
  isAbstract: true
})
export class FoodInRecipeUpdateWithoutFoodInput {
  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  quantity?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RecipeUpdateOneRequiredWithoutFoodsNestedInput, {
    nullable: true
  })
  recipe?: RecipeUpdateOneRequiredWithoutFoodsNestedInput | undefined;

  @TypeGraphQL.Field(_type => UnitUpdateOneRequiredWithoutRecipeFoodsNestedInput, {
    nullable: true
  })
  unit?: UnitUpdateOneRequiredWithoutRecipeFoodsNestedInput | undefined;
}
