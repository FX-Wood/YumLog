import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodNutritionCreateWithoutUnitInput } from "../inputs/FoodNutritionCreateWithoutUnitInput";
import { FoodNutritionUpdateWithoutUnitInput } from "../inputs/FoodNutritionUpdateWithoutUnitInput";
import { FoodNutritionWhereUniqueInput } from "../inputs/FoodNutritionWhereUniqueInput";

@TypeGraphQL.InputType("FoodNutritionUpsertWithWhereUniqueWithoutUnitInput", {
  isAbstract: true
})
export class FoodNutritionUpsertWithWhereUniqueWithoutUnitInput {
  @TypeGraphQL.Field(_type => FoodNutritionWhereUniqueInput, {
    nullable: false
  })
  where!: FoodNutritionWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodNutritionUpdateWithoutUnitInput, {
    nullable: false
  })
  update!: FoodNutritionUpdateWithoutUnitInput;

  @TypeGraphQL.Field(_type => FoodNutritionCreateWithoutUnitInput, {
    nullable: false
  })
  create!: FoodNutritionCreateWithoutUnitInput;
}
