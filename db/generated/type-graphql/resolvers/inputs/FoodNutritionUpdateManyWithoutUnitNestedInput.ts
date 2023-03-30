import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodNutritionCreateManyUnitInputEnvelope } from "../inputs/FoodNutritionCreateManyUnitInputEnvelope";
import { FoodNutritionCreateOrConnectWithoutUnitInput } from "../inputs/FoodNutritionCreateOrConnectWithoutUnitInput";
import { FoodNutritionCreateWithoutUnitInput } from "../inputs/FoodNutritionCreateWithoutUnitInput";
import { FoodNutritionScalarWhereInput } from "../inputs/FoodNutritionScalarWhereInput";
import { FoodNutritionUpdateManyWithWhereWithoutUnitInput } from "../inputs/FoodNutritionUpdateManyWithWhereWithoutUnitInput";
import { FoodNutritionUpdateWithWhereUniqueWithoutUnitInput } from "../inputs/FoodNutritionUpdateWithWhereUniqueWithoutUnitInput";
import { FoodNutritionUpsertWithWhereUniqueWithoutUnitInput } from "../inputs/FoodNutritionUpsertWithWhereUniqueWithoutUnitInput";
import { FoodNutritionWhereUniqueInput } from "../inputs/FoodNutritionWhereUniqueInput";

@TypeGraphQL.InputType("FoodNutritionUpdateManyWithoutUnitNestedInput", {
  isAbstract: true
})
export class FoodNutritionUpdateManyWithoutUnitNestedInput {
  @TypeGraphQL.Field(_type => [FoodNutritionCreateWithoutUnitInput], {
    nullable: true
  })
  create?: FoodNutritionCreateWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionCreateOrConnectWithoutUnitInput], {
    nullable: true
  })
  connectOrCreate?: FoodNutritionCreateOrConnectWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionUpsertWithWhereUniqueWithoutUnitInput], {
    nullable: true
  })
  upsert?: FoodNutritionUpsertWithWhereUniqueWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodNutritionCreateManyUnitInputEnvelope, {
    nullable: true
  })
  createMany?: FoodNutritionCreateManyUnitInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FoodNutritionUpdateWithWhereUniqueWithoutUnitInput], {
    nullable: true
  })
  update?: FoodNutritionUpdateWithWhereUniqueWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionUpdateManyWithWhereWithoutUnitInput], {
    nullable: true
  })
  updateMany?: FoodNutritionUpdateManyWithWhereWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FoodNutritionScalarWhereInput[] | undefined;
}
