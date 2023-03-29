import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealCreateWithoutUserInput } from "../inputs/MealCreateWithoutUserInput";
import { MealUpdateWithoutUserInput } from "../inputs/MealUpdateWithoutUserInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";

@TypeGraphQL.InputType("MealUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class MealUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MealWhereUniqueInput, {
    nullable: false
  })
  where!: MealWhereUniqueInput;

  @TypeGraphQL.Field(_type => MealUpdateWithoutUserInput, {
    nullable: false
  })
  update!: MealUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => MealCreateWithoutUserInput, {
    nullable: false
  })
  create!: MealCreateWithoutUserInput;
}
