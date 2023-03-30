import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateWithoutFoodNutritionInput } from "../inputs/UnitCreateWithoutFoodNutritionInput";
import { UnitUpdateWithoutFoodNutritionInput } from "../inputs/UnitUpdateWithoutFoodNutritionInput";

@TypeGraphQL.InputType("UnitUpsertWithoutFoodNutritionInput", {
  isAbstract: true
})
export class UnitUpsertWithoutFoodNutritionInput {
  @TypeGraphQL.Field(_type => UnitUpdateWithoutFoodNutritionInput, {
    nullable: false
  })
  update!: UnitUpdateWithoutFoodNutritionInput;

  @TypeGraphQL.Field(_type => UnitCreateWithoutFoodNutritionInput, {
    nullable: false
  })
  create!: UnitCreateWithoutFoodNutritionInput;
}
