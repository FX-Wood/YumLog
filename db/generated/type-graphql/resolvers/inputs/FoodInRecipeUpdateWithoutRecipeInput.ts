import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { FoodUpdateOneRequiredWithoutRecipesNestedInput } from "../inputs/FoodUpdateOneRequiredWithoutRecipesNestedInput";
import { UnitUpdateOneRequiredWithoutRecipeFoodsNestedInput } from "../inputs/UnitUpdateOneRequiredWithoutRecipeFoodsNestedInput";

@TypeGraphQL.InputType("FoodInRecipeUpdateWithoutRecipeInput", {
  isAbstract: true
})
export class FoodInRecipeUpdateWithoutRecipeInput {
  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  quantity?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FoodUpdateOneRequiredWithoutRecipesNestedInput, {
    nullable: true
  })
  food?: FoodUpdateOneRequiredWithoutRecipesNestedInput | undefined;

  @TypeGraphQL.Field(_type => UnitUpdateOneRequiredWithoutRecipeFoodsNestedInput, {
    nullable: true
  })
  unit?: UnitUpdateOneRequiredWithoutRecipeFoodsNestedInput | undefined;
}
