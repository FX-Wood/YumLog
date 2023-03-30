import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealCreateWithoutRecipesInput } from "../inputs/MealCreateWithoutRecipesInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";

@TypeGraphQL.InputType("MealCreateOrConnectWithoutRecipesInput", {
  isAbstract: true
})
export class MealCreateOrConnectWithoutRecipesInput {
  @TypeGraphQL.Field(_type => MealWhereUniqueInput, {
    nullable: false
  })
  where!: MealWhereUniqueInput;

  @TypeGraphQL.Field(_type => MealCreateWithoutRecipesInput, {
    nullable: false
  })
  create!: MealCreateWithoutRecipesInput;
}
