import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealCreateWithoutUserInput } from "../inputs/MealCreateWithoutUserInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";

@TypeGraphQL.InputType("MealCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class MealCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => MealWhereUniqueInput, {
    nullable: false
  })
  where!: MealWhereUniqueInput;

  @TypeGraphQL.Field(_type => MealCreateWithoutUserInput, {
    nullable: false
  })
  create!: MealCreateWithoutUserInput;
}
