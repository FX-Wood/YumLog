import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { FoodUpdateOneRequiredWithoutMealsNestedInput } from "../inputs/FoodUpdateOneRequiredWithoutMealsNestedInput";
import { MealUpdateOneRequiredWithoutFoodsNestedInput } from "../inputs/MealUpdateOneRequiredWithoutFoodsNestedInput";
import { UnitUpdateOneRequiredWithoutMealFoodsNestedInput } from "../inputs/UnitUpdateOneRequiredWithoutMealFoodsNestedInput";

@TypeGraphQL.InputType("FoodInMealUpdateInput", {
  isAbstract: true
})
export class FoodInMealUpdateInput {
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

  @TypeGraphQL.Field(_type => UnitUpdateOneRequiredWithoutMealFoodsNestedInput, {
    nullable: true
  })
  unit?: UnitUpdateOneRequiredWithoutMealFoodsNestedInput | undefined;
}
