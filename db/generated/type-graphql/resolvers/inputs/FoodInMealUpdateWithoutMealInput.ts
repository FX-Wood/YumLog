import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { FoodUpdateOneRequiredWithoutMealsNestedInput } from "../inputs/FoodUpdateOneRequiredWithoutMealsNestedInput";
import { UnitUpdateOneRequiredWithoutMealFoodsNestedInput } from "../inputs/UnitUpdateOneRequiredWithoutMealFoodsNestedInput";

@TypeGraphQL.InputType("FoodInMealUpdateWithoutMealInput", {
  isAbstract: true
})
export class FoodInMealUpdateWithoutMealInput {
  @TypeGraphQL.Field(_type => FoodUpdateOneRequiredWithoutMealsNestedInput, {
    nullable: true
  })
  food?: FoodUpdateOneRequiredWithoutMealsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  quantity?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UnitUpdateOneRequiredWithoutMealFoodsNestedInput, {
    nullable: true
  })
  unit?: UnitUpdateOneRequiredWithoutMealFoodsNestedInput | undefined;
}
