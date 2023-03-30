import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodNutritionUpdateWithoutFoodInput } from "../inputs/FoodNutritionUpdateWithoutFoodInput";
import { FoodNutritionWhereUniqueInput } from "../inputs/FoodNutritionWhereUniqueInput";

@TypeGraphQL.InputType("FoodNutritionUpdateWithWhereUniqueWithoutFoodInput", {
  isAbstract: true
})
export class FoodNutritionUpdateWithWhereUniqueWithoutFoodInput {
  @TypeGraphQL.Field(_type => FoodNutritionWhereUniqueInput, {
    nullable: false
  })
  where!: FoodNutritionWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodNutritionUpdateWithoutFoodInput, {
    nullable: false
  })
  data!: FoodNutritionUpdateWithoutFoodInput;
}
