import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { FoodUpdateOneRequiredWithoutMealsNestedInput } from "../inputs/FoodUpdateOneRequiredWithoutMealsNestedInput";
import { MealUpdateOneRequiredWithoutFoodsNestedInput } from "../inputs/MealUpdateOneRequiredWithoutFoodsNestedInput";

@TypeGraphQL.InputType("FoodInMealUpdateWithoutUnitInput", {
  isAbstract: true
})
export class FoodInMealUpdateWithoutUnitInput {
  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  quantity?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FoodUpdateOneRequiredWithoutMealsNestedInput, {
    nullable: true
  })
  food?: FoodUpdateOneRequiredWithoutMealsNestedInput | undefined;

  @TypeGraphQL.Field(_type => MealUpdateOneRequiredWithoutFoodsNestedInput, {
    nullable: true
  })
  meal?: MealUpdateOneRequiredWithoutFoodsNestedInput | undefined;
}
