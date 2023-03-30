import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodNutritionCreateWithoutFoodInput } from "../inputs/FoodNutritionCreateWithoutFoodInput";
import { FoodNutritionWhereUniqueInput } from "../inputs/FoodNutritionWhereUniqueInput";

@TypeGraphQL.InputType("FoodNutritionCreateOrConnectWithoutFoodInput", {
  isAbstract: true
})
export class FoodNutritionCreateOrConnectWithoutFoodInput {
  @TypeGraphQL.Field(_type => FoodNutritionWhereUniqueInput, {
    nullable: false
  })
  where!: FoodNutritionWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodNutritionCreateWithoutFoodInput, {
    nullable: false
  })
  create!: FoodNutritionCreateWithoutFoodInput;
}
