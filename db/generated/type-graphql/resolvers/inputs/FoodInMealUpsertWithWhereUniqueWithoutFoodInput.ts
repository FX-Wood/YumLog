import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateWithoutFoodInput } from "../inputs/FoodInMealCreateWithoutFoodInput";
import { FoodInMealUpdateWithoutFoodInput } from "../inputs/FoodInMealUpdateWithoutFoodInput";
import { FoodInMealWhereUniqueInput } from "../inputs/FoodInMealWhereUniqueInput";

@TypeGraphQL.InputType("FoodInMealUpsertWithWhereUniqueWithoutFoodInput", {
  isAbstract: true
})
export class FoodInMealUpsertWithWhereUniqueWithoutFoodInput {
  @TypeGraphQL.Field(_type => FoodInMealWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInMealWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodInMealUpdateWithoutFoodInput, {
    nullable: false
  })
  update!: FoodInMealUpdateWithoutFoodInput;

  @TypeGraphQL.Field(_type => FoodInMealCreateWithoutFoodInput, {
    nullable: false
  })
  create!: FoodInMealCreateWithoutFoodInput;
}
