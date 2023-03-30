import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodNutritionCreateManyFoodInputEnvelope } from "../inputs/FoodNutritionCreateManyFoodInputEnvelope";
import { FoodNutritionCreateOrConnectWithoutFoodInput } from "../inputs/FoodNutritionCreateOrConnectWithoutFoodInput";
import { FoodNutritionCreateWithoutFoodInput } from "../inputs/FoodNutritionCreateWithoutFoodInput";
import { FoodNutritionWhereUniqueInput } from "../inputs/FoodNutritionWhereUniqueInput";

@TypeGraphQL.InputType("FoodNutritionCreateNestedManyWithoutFoodInput", {
  isAbstract: true
})
export class FoodNutritionCreateNestedManyWithoutFoodInput {
  @TypeGraphQL.Field(_type => [FoodNutritionCreateWithoutFoodInput], {
    nullable: true
  })
  create?: FoodNutritionCreateWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionCreateOrConnectWithoutFoodInput], {
    nullable: true
  })
  connectOrCreate?: FoodNutritionCreateOrConnectWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodNutritionCreateManyFoodInputEnvelope, {
    nullable: true
  })
  createMany?: FoodNutritionCreateManyFoodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionWhereUniqueInput], {
    nullable: true
  })
  connect?: FoodNutritionWhereUniqueInput[] | undefined;
}
