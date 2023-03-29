import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealCreateWithoutFoodsInput } from "../inputs/MealCreateWithoutFoodsInput";
import { MealUpdateWithoutFoodsInput } from "../inputs/MealUpdateWithoutFoodsInput";

@TypeGraphQL.InputType("MealUpsertWithoutFoodsInput", {
  isAbstract: true
})
export class MealUpsertWithoutFoodsInput {
  @TypeGraphQL.Field(_type => MealUpdateWithoutFoodsInput, {
    nullable: false
  })
  update!: MealUpdateWithoutFoodsInput;

  @TypeGraphQL.Field(_type => MealCreateWithoutFoodsInput, {
    nullable: false
  })
  create!: MealCreateWithoutFoodsInput;
}
