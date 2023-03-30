import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodNutritionCreateWithoutFoodInput } from "../inputs/FoodNutritionCreateWithoutFoodInput";
import { FoodNutritionUpdateWithoutFoodInput } from "../inputs/FoodNutritionUpdateWithoutFoodInput";
import { FoodNutritionWhereUniqueInput } from "../inputs/FoodNutritionWhereUniqueInput";

@TypeGraphQL.InputType("FoodNutritionUpsertWithWhereUniqueWithoutFoodInput", {
  isAbstract: true
})
export class FoodNutritionUpsertWithWhereUniqueWithoutFoodInput {
  @TypeGraphQL.Field(_type => FoodNutritionWhereUniqueInput, {
    nullable: false
  })
  where!: FoodNutritionWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodNutritionUpdateWithoutFoodInput, {
    nullable: false
  })
  update!: FoodNutritionUpdateWithoutFoodInput;

  @TypeGraphQL.Field(_type => FoodNutritionCreateWithoutFoodInput, {
    nullable: false
  })
  create!: FoodNutritionCreateWithoutFoodInput;
}
