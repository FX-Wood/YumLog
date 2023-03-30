import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodNutritionCreateManyUnitInputEnvelope } from "../inputs/FoodNutritionCreateManyUnitInputEnvelope";
import { FoodNutritionCreateOrConnectWithoutUnitInput } from "../inputs/FoodNutritionCreateOrConnectWithoutUnitInput";
import { FoodNutritionCreateWithoutUnitInput } from "../inputs/FoodNutritionCreateWithoutUnitInput";
import { FoodNutritionWhereUniqueInput } from "../inputs/FoodNutritionWhereUniqueInput";

@TypeGraphQL.InputType("FoodNutritionCreateNestedManyWithoutUnitInput", {
  isAbstract: true
})
export class FoodNutritionCreateNestedManyWithoutUnitInput {
  @TypeGraphQL.Field(_type => [FoodNutritionCreateWithoutUnitInput], {
    nullable: true
  })
  create?: FoodNutritionCreateWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionCreateOrConnectWithoutUnitInput], {
    nullable: true
  })
  connectOrCreate?: FoodNutritionCreateOrConnectWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodNutritionCreateManyUnitInputEnvelope, {
    nullable: true
  })
  createMany?: FoodNutritionCreateManyUnitInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionWhereUniqueInput], {
    nullable: true
  })
  connect?: FoodNutritionWhereUniqueInput[] | undefined;
}
