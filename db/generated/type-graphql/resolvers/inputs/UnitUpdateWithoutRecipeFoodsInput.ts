import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealUpdateManyWithoutUnitNestedInput } from "../inputs/FoodInMealUpdateManyWithoutUnitNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UnitUpdateWithoutRecipeFoodsInput", {
  isAbstract: true
})
export class UnitUpdateWithoutRecipeFoodsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  abbreviation?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FoodInMealUpdateManyWithoutUnitNestedInput, {
    nullable: true
  })
  mealFoods?: FoodInMealUpdateManyWithoutUnitNestedInput | undefined;
}
