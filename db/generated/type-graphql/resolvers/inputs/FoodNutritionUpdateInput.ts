import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { FoodUpdateOneRequiredWithoutNutritionNestedInput } from "../inputs/FoodUpdateOneRequiredWithoutNutritionNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { UnitUpdateOneRequiredWithoutFoodNutritionNestedInput } from "../inputs/UnitUpdateOneRequiredWithoutFoodNutritionNestedInput";

@TypeGraphQL.InputType("FoodNutritionUpdateInput", {
  isAbstract: true
})
export class FoodNutritionUpdateInput {
  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  quantity?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  calories?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  protein?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  fat?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  carbs?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FoodUpdateOneRequiredWithoutNutritionNestedInput, {
    nullable: true
  })
  food?: FoodUpdateOneRequiredWithoutNutritionNestedInput | undefined;

  @TypeGraphQL.Field(_type => UnitUpdateOneRequiredWithoutFoodNutritionNestedInput, {
    nullable: true
  })
  unit?: UnitUpdateOneRequiredWithoutFoodNutritionNestedInput | undefined;
}
