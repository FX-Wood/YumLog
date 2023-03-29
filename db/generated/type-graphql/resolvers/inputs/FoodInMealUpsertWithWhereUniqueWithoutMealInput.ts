import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateWithoutMealInput } from "../inputs/FoodInMealCreateWithoutMealInput";
import { FoodInMealUpdateWithoutMealInput } from "../inputs/FoodInMealUpdateWithoutMealInput";
import { FoodInMealWhereUniqueInput } from "../inputs/FoodInMealWhereUniqueInput";

@TypeGraphQL.InputType("FoodInMealUpsertWithWhereUniqueWithoutMealInput", {
  isAbstract: true
})
export class FoodInMealUpsertWithWhereUniqueWithoutMealInput {
  @TypeGraphQL.Field(_type => FoodInMealWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInMealWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodInMealUpdateWithoutMealInput, {
    nullable: false
  })
  update!: FoodInMealUpdateWithoutMealInput;

  @TypeGraphQL.Field(_type => FoodInMealCreateWithoutMealInput, {
    nullable: false
  })
  create!: FoodInMealCreateWithoutMealInput;
}
