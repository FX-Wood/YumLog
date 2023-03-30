import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodNutritionCreateWithoutUnitInput } from "../inputs/FoodNutritionCreateWithoutUnitInput";
import { FoodNutritionWhereUniqueInput } from "../inputs/FoodNutritionWhereUniqueInput";

@TypeGraphQL.InputType("FoodNutritionCreateOrConnectWithoutUnitInput", {
  isAbstract: true
})
export class FoodNutritionCreateOrConnectWithoutUnitInput {
  @TypeGraphQL.Field(_type => FoodNutritionWhereUniqueInput, {
    nullable: false
  })
  where!: FoodNutritionWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodNutritionCreateWithoutUnitInput, {
    nullable: false
  })
  create!: FoodNutritionCreateWithoutUnitInput;
}
