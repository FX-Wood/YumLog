import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateManyUnitInputEnvelope } from "../inputs/FoodInMealCreateManyUnitInputEnvelope";
import { FoodInMealCreateOrConnectWithoutUnitInput } from "../inputs/FoodInMealCreateOrConnectWithoutUnitInput";
import { FoodInMealCreateWithoutUnitInput } from "../inputs/FoodInMealCreateWithoutUnitInput";
import { FoodInMealScalarWhereInput } from "../inputs/FoodInMealScalarWhereInput";
import { FoodInMealUpdateManyWithWhereWithoutUnitInput } from "../inputs/FoodInMealUpdateManyWithWhereWithoutUnitInput";
import { FoodInMealUpdateWithWhereUniqueWithoutUnitInput } from "../inputs/FoodInMealUpdateWithWhereUniqueWithoutUnitInput";
import { FoodInMealUpsertWithWhereUniqueWithoutUnitInput } from "../inputs/FoodInMealUpsertWithWhereUniqueWithoutUnitInput";
import { FoodInMealWhereUniqueInput } from "../inputs/FoodInMealWhereUniqueInput";

@TypeGraphQL.InputType("FoodInMealUpdateManyWithoutUnitNestedInput", {
  isAbstract: true
})
export class FoodInMealUpdateManyWithoutUnitNestedInput {
  @TypeGraphQL.Field(_type => [FoodInMealCreateWithoutUnitInput], {
    nullable: true
  })
  create?: FoodInMealCreateWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealCreateOrConnectWithoutUnitInput], {
    nullable: true
  })
  connectOrCreate?: FoodInMealCreateOrConnectWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealUpsertWithWhereUniqueWithoutUnitInput], {
    nullable: true
  })
  upsert?: FoodInMealUpsertWithWhereUniqueWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodInMealCreateManyUnitInputEnvelope, {
    nullable: true
  })
  createMany?: FoodInMealCreateManyUnitInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FoodInMealUpdateWithWhereUniqueWithoutUnitInput], {
    nullable: true
  })
  update?: FoodInMealUpdateWithWhereUniqueWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealUpdateManyWithWhereWithoutUnitInput], {
    nullable: true
  })
  updateMany?: FoodInMealUpdateManyWithWhereWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FoodInMealScalarWhereInput[] | undefined;
}
