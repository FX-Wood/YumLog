import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodNutritionUpdateWithoutUnitInput } from "../inputs/FoodNutritionUpdateWithoutUnitInput";
import { FoodNutritionWhereUniqueInput } from "../inputs/FoodNutritionWhereUniqueInput";

@TypeGraphQL.InputType("FoodNutritionUpdateWithWhereUniqueWithoutUnitInput", {
  isAbstract: true
})
export class FoodNutritionUpdateWithWhereUniqueWithoutUnitInput {
  @TypeGraphQL.Field(_type => FoodNutritionWhereUniqueInput, {
    nullable: false
  })
  where!: FoodNutritionWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodNutritionUpdateWithoutUnitInput, {
    nullable: false
  })
  data!: FoodNutritionUpdateWithoutUnitInput;
}
