import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealType } from "../../enums/MealType";

@TypeGraphQL.InputType("EnumMealTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumMealTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => MealType, {
    nullable: true
  })
  set?: "BREAKFAST" | "LUNCH" | "DINNER" | "SNACK" | undefined;
}
