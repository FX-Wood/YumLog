import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateManyUnitInputEnvelope } from "../inputs/FoodInRecipeCreateManyUnitInputEnvelope";
import { FoodInRecipeCreateOrConnectWithoutUnitInput } from "../inputs/FoodInRecipeCreateOrConnectWithoutUnitInput";
import { FoodInRecipeCreateWithoutUnitInput } from "../inputs/FoodInRecipeCreateWithoutUnitInput";
import { FoodInRecipeScalarWhereInput } from "../inputs/FoodInRecipeScalarWhereInput";
import { FoodInRecipeUpdateManyWithWhereWithoutUnitInput } from "../inputs/FoodInRecipeUpdateManyWithWhereWithoutUnitInput";
import { FoodInRecipeUpdateWithWhereUniqueWithoutUnitInput } from "../inputs/FoodInRecipeUpdateWithWhereUniqueWithoutUnitInput";
import { FoodInRecipeUpsertWithWhereUniqueWithoutUnitInput } from "../inputs/FoodInRecipeUpsertWithWhereUniqueWithoutUnitInput";
import { FoodInRecipeWhereUniqueInput } from "../inputs/FoodInRecipeWhereUniqueInput";

@TypeGraphQL.InputType("FoodInRecipeUpdateManyWithoutUnitNestedInput", {
  isAbstract: true
})
export class FoodInRecipeUpdateManyWithoutUnitNestedInput {
  @TypeGraphQL.Field(_type => [FoodInRecipeCreateWithoutUnitInput], {
    nullable: true
  })
  create?: FoodInRecipeCreateWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeCreateOrConnectWithoutUnitInput], {
    nullable: true
  })
  connectOrCreate?: FoodInRecipeCreateOrConnectWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeUpsertWithWhereUniqueWithoutUnitInput], {
    nullable: true
  })
  upsert?: FoodInRecipeUpsertWithWhereUniqueWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateManyUnitInputEnvelope, {
    nullable: true
  })
  createMany?: FoodInRecipeCreateManyUnitInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeWhereUniqueInput], {
    nullable: true
  })
  set?: FoodInRecipeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FoodInRecipeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeWhereUniqueInput], {
    nullable: true
  })
  delete?: FoodInRecipeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeWhereUniqueInput], {
    nullable: true
  })
  connect?: FoodInRecipeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeUpdateWithWhereUniqueWithoutUnitInput], {
    nullable: true
  })
  update?: FoodInRecipeUpdateWithWhereUniqueWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeUpdateManyWithWhereWithoutUnitInput], {
    nullable: true
  })
  updateMany?: FoodInRecipeUpdateManyWithWhereWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FoodInRecipeScalarWhereInput[] | undefined;
}
