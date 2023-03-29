import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumMealTypeFieldUpdateOperationsInput } from "../inputs/EnumMealTypeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutMealsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutMealsNestedInput";

@TypeGraphQL.InputType("MealUpdateWithoutFoodsInput", {
  isAbstract: true
})
export class MealUpdateWithoutFoodsInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMealsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutMealsNestedInput | undefined;

  @TypeGraphQL.Field(_type => EnumMealTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  mealType?: EnumMealTypeFieldUpdateOperationsInput | undefined;
}
