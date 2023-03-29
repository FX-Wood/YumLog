import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateManyMealInput } from "../inputs/FoodInMealCreateManyMealInput";

@TypeGraphQL.InputType("FoodInMealCreateManyMealInputEnvelope", {
  isAbstract: true
})
export class FoodInMealCreateManyMealInputEnvelope {
  @TypeGraphQL.Field(_type => [FoodInMealCreateManyMealInput], {
    nullable: false
  })
  data!: FoodInMealCreateManyMealInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
