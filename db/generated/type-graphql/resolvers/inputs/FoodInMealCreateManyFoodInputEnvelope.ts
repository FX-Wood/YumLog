import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateManyFoodInput } from "../inputs/FoodInMealCreateManyFoodInput";

@TypeGraphQL.InputType("FoodInMealCreateManyFoodInputEnvelope", {
  isAbstract: true
})
export class FoodInMealCreateManyFoodInputEnvelope {
  @TypeGraphQL.Field(_type => [FoodInMealCreateManyFoodInput], {
    nullable: false
  })
  data!: FoodInMealCreateManyFoodInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
