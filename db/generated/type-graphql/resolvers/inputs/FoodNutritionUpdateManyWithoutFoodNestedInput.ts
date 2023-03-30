import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodNutritionCreateManyFoodInputEnvelope } from "../inputs/FoodNutritionCreateManyFoodInputEnvelope";
import { FoodNutritionCreateOrConnectWithoutFoodInput } from "../inputs/FoodNutritionCreateOrConnectWithoutFoodInput";
import { FoodNutritionCreateWithoutFoodInput } from "../inputs/FoodNutritionCreateWithoutFoodInput";
import { FoodNutritionScalarWhereInput } from "../inputs/FoodNutritionScalarWhereInput";
import { FoodNutritionUpdateManyWithWhereWithoutFoodInput } from "../inputs/FoodNutritionUpdateManyWithWhereWithoutFoodInput";
import { FoodNutritionUpdateWithWhereUniqueWithoutFoodInput } from "../inputs/FoodNutritionUpdateWithWhereUniqueWithoutFoodInput";
import { FoodNutritionUpsertWithWhereUniqueWithoutFoodInput } from "../inputs/FoodNutritionUpsertWithWhereUniqueWithoutFoodInput";
import { FoodNutritionWhereUniqueInput } from "../inputs/FoodNutritionWhereUniqueInput";

@TypeGraphQL.InputType("FoodNutritionUpdateManyWithoutFoodNestedInput", {
  isAbstract: true
})
export class FoodNutritionUpdateManyWithoutFoodNestedInput {
  @TypeGraphQL.Field(_type => [FoodNutritionCreateWithoutFoodInput], {
    nullable: true
  })
  create?: FoodNutritionCreateWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionCreateOrConnectWithoutFoodInput], {
    nullable: true
  })
  connectOrCreate?: FoodNutritionCreateOrConnectWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionUpsertWithWhereUniqueWithoutFoodInput], {
    nullable: true
  })
  upsert?: FoodNutritionUpsertWithWhereUniqueWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodNutritionCreateManyFoodInputEnvelope, {
    nullable: true
  })
  createMany?: FoodNutritionCreateManyFoodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionWhereUniqueInput], {
    nullable: true
  })
  set?: FoodNutritionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FoodNutritionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionWhereUniqueInput], {
    nullable: true
  })
  delete?: FoodNutritionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionWhereUniqueInput], {
    nullable: true
  })
  connect?: FoodNutritionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionUpdateWithWhereUniqueWithoutFoodInput], {
    nullable: true
  })
  update?: FoodNutritionUpdateWithWhereUniqueWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionUpdateManyWithWhereWithoutFoodInput], {
    nullable: true
  })
  updateMany?: FoodNutritionUpdateManyWithWhereWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FoodNutritionScalarWhereInput[] | undefined;
}
