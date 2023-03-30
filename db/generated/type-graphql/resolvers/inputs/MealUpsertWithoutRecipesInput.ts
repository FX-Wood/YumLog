import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealCreateWithoutRecipesInput } from "../inputs/MealCreateWithoutRecipesInput";
import { MealUpdateWithoutRecipesInput } from "../inputs/MealUpdateWithoutRecipesInput";

@TypeGraphQL.InputType("MealUpsertWithoutRecipesInput", {
  isAbstract: true
})
export class MealUpsertWithoutRecipesInput {
  @TypeGraphQL.Field(_type => MealUpdateWithoutRecipesInput, {
    nullable: false
  })
  update!: MealUpdateWithoutRecipesInput;

  @TypeGraphQL.Field(_type => MealCreateWithoutRecipesInput, {
    nullable: false
  })
  create!: MealCreateWithoutRecipesInput;
}
