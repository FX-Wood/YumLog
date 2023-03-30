import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodCreateWithoutNutritionInput } from "../inputs/FoodCreateWithoutNutritionInput";
import { FoodUpdateWithoutNutritionInput } from "../inputs/FoodUpdateWithoutNutritionInput";

@TypeGraphQL.InputType("FoodUpsertWithoutNutritionInput", {
  isAbstract: true
})
export class FoodUpsertWithoutNutritionInput {
  @TypeGraphQL.Field(_type => FoodUpdateWithoutNutritionInput, {
    nullable: false
  })
  update!: FoodUpdateWithoutNutritionInput;

  @TypeGraphQL.Field(_type => FoodCreateWithoutNutritionInput, {
    nullable: false
  })
  create!: FoodCreateWithoutNutritionInput;
}
