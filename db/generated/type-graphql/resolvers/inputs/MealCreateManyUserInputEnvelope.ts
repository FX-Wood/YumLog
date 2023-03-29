import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealCreateManyUserInput } from "../inputs/MealCreateManyUserInput";

@TypeGraphQL.InputType("MealCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class MealCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [MealCreateManyUserInput], {
    nullable: false
  })
  data!: MealCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
