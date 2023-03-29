import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealUpdateWithoutFoodInput } from "../inputs/FoodInMealUpdateWithoutFoodInput";
import { FoodInMealWhereUniqueInput } from "../inputs/FoodInMealWhereUniqueInput";

@TypeGraphQL.InputType("FoodInMealUpdateWithWhereUniqueWithoutFoodInput", {
  isAbstract: true
})
export class FoodInMealUpdateWithWhereUniqueWithoutFoodInput {
  @TypeGraphQL.Field(_type => FoodInMealWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInMealWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodInMealUpdateWithoutFoodInput, {
    nullable: false
  })
  data!: FoodInMealUpdateWithoutFoodInput;
}
