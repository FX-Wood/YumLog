import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateManyFoodInputEnvelope } from "../inputs/FoodInMealCreateManyFoodInputEnvelope";
import { FoodInMealCreateOrConnectWithoutFoodInput } from "../inputs/FoodInMealCreateOrConnectWithoutFoodInput";
import { FoodInMealCreateWithoutFoodInput } from "../inputs/FoodInMealCreateWithoutFoodInput";
import { FoodInMealScalarWhereInput } from "../inputs/FoodInMealScalarWhereInput";
import { FoodInMealUpdateManyWithWhereWithoutFoodInput } from "../inputs/FoodInMealUpdateManyWithWhereWithoutFoodInput";
import { FoodInMealUpdateWithWhereUniqueWithoutFoodInput } from "../inputs/FoodInMealUpdateWithWhereUniqueWithoutFoodInput";
import { FoodInMealUpsertWithWhereUniqueWithoutFoodInput } from "../inputs/FoodInMealUpsertWithWhereUniqueWithoutFoodInput";
import { FoodInMealWhereUniqueInput } from "../inputs/FoodInMealWhereUniqueInput";

@TypeGraphQL.InputType("FoodInMealUpdateManyWithoutFoodNestedInput", {
  isAbstract: true
})
export class FoodInMealUpdateManyWithoutFoodNestedInput {
  @TypeGraphQL.Field(_type => [FoodInMealCreateWithoutFoodInput], {
    nullable: true
  })
  create?: FoodInMealCreateWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealCreateOrConnectWithoutFoodInput], {
    nullable: true
  })
  connectOrCreate?: FoodInMealCreateOrConnectWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealUpsertWithWhereUniqueWithoutFoodInput], {
    nullable: true
  })
  upsert?: FoodInMealUpsertWithWhereUniqueWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodInMealCreateManyFoodInputEnvelope, {
    nullable: true
  })
  createMany?: FoodInMealCreateManyFoodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealWhereUniqueInput], {
    nullable: true
  })
  set?: FoodInMealWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FoodInMealWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealWhereUniqueInput], {
    nullable: true
  })
  delete?: FoodInMealWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealWhereUniqueInput], {
    nullable: true
  })
  connect?: FoodInMealWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealUpdateWithWhereUniqueWithoutFoodInput], {
    nullable: true
  })
  update?: FoodInMealUpdateWithWhereUniqueWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealUpdateManyWithWhereWithoutFoodInput], {
    nullable: true
  })
  updateMany?: FoodInMealUpdateManyWithWhereWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FoodInMealScalarWhereInput[] | undefined;
}
