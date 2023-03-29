import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateWithoutFoodInput } from "../inputs/FoodInMealCreateWithoutFoodInput";
import { FoodInMealWhereUniqueInput } from "../inputs/FoodInMealWhereUniqueInput";

@TypeGraphQL.InputType("FoodInMealCreateOrConnectWithoutFoodInput", {
  isAbstract: true
})
export class FoodInMealCreateOrConnectWithoutFoodInput {
  @TypeGraphQL.Field(_type => FoodInMealWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInMealWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodInMealCreateWithoutFoodInput, {
    nullable: false
  })
  create!: FoodInMealCreateWithoutFoodInput;
}
