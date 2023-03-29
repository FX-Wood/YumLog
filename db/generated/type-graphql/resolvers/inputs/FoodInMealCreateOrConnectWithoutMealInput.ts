import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateWithoutMealInput } from "../inputs/FoodInMealCreateWithoutMealInput";
import { FoodInMealWhereUniqueInput } from "../inputs/FoodInMealWhereUniqueInput";

@TypeGraphQL.InputType("FoodInMealCreateOrConnectWithoutMealInput", {
  isAbstract: true
})
export class FoodInMealCreateOrConnectWithoutMealInput {
  @TypeGraphQL.Field(_type => FoodInMealWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInMealWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodInMealCreateWithoutMealInput, {
    nullable: false
  })
  create!: FoodInMealCreateWithoutMealInput;
}
