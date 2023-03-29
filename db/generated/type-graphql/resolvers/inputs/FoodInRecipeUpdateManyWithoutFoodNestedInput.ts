import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateManyFoodInputEnvelope } from "../inputs/FoodInRecipeCreateManyFoodInputEnvelope";
import { FoodInRecipeCreateOrConnectWithoutFoodInput } from "../inputs/FoodInRecipeCreateOrConnectWithoutFoodInput";
import { FoodInRecipeCreateWithoutFoodInput } from "../inputs/FoodInRecipeCreateWithoutFoodInput";
import { FoodInRecipeScalarWhereInput } from "../inputs/FoodInRecipeScalarWhereInput";
import { FoodInRecipeUpdateManyWithWhereWithoutFoodInput } from "../inputs/FoodInRecipeUpdateManyWithWhereWithoutFoodInput";
import { FoodInRecipeUpdateWithWhereUniqueWithoutFoodInput } from "../inputs/FoodInRecipeUpdateWithWhereUniqueWithoutFoodInput";
import { FoodInRecipeUpsertWithWhereUniqueWithoutFoodInput } from "../inputs/FoodInRecipeUpsertWithWhereUniqueWithoutFoodInput";
import { FoodInRecipeWhereUniqueInput } from "../inputs/FoodInRecipeWhereUniqueInput";

@TypeGraphQL.InputType("FoodInRecipeUpdateManyWithoutFoodNestedInput", {
  isAbstract: true
})
export class FoodInRecipeUpdateManyWithoutFoodNestedInput {
  @TypeGraphQL.Field(_type => [FoodInRecipeCreateWithoutFoodInput], {
    nullable: true
  })
  create?: FoodInRecipeCreateWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeCreateOrConnectWithoutFoodInput], {
    nullable: true
  })
  connectOrCreate?: FoodInRecipeCreateOrConnectWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeUpsertWithWhereUniqueWithoutFoodInput], {
    nullable: true
  })
  upsert?: FoodInRecipeUpsertWithWhereUniqueWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateManyFoodInputEnvelope, {
    nullable: true
  })
  createMany?: FoodInRecipeCreateManyFoodInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FoodInRecipeUpdateWithWhereUniqueWithoutFoodInput], {
    nullable: true
  })
  update?: FoodInRecipeUpdateWithWhereUniqueWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeUpdateManyWithWhereWithoutFoodInput], {
    nullable: true
  })
  updateMany?: FoodInRecipeUpdateManyWithWhereWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FoodInRecipeScalarWhereInput[] | undefined;
}
