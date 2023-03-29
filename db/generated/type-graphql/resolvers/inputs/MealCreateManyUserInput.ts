import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealType } from "../../enums/MealType";

@TypeGraphQL.InputType("MealCreateManyUserInput", {
  isAbstract: true
})
export class MealCreateManyUserInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => MealType, {
    nullable: false
  })
  mealType!: "BREAKFAST" | "LUNCH" | "DINNER" | "SNACK";
}
