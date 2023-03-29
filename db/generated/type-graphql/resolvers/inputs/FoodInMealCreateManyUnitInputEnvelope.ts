import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateManyUnitInput } from "../inputs/FoodInMealCreateManyUnitInput";

@TypeGraphQL.InputType("FoodInMealCreateManyUnitInputEnvelope", {
  isAbstract: true
})
export class FoodInMealCreateManyUnitInputEnvelope {
  @TypeGraphQL.Field(_type => [FoodInMealCreateManyUnitInput], {
    nullable: false
  })
  data!: FoodInMealCreateManyUnitInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
