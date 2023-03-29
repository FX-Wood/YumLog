import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateManyMealInputEnvelope } from "../inputs/FoodInMealCreateManyMealInputEnvelope";
import { FoodInMealCreateOrConnectWithoutMealInput } from "../inputs/FoodInMealCreateOrConnectWithoutMealInput";
import { FoodInMealCreateWithoutMealInput } from "../inputs/FoodInMealCreateWithoutMealInput";
import { FoodInMealScalarWhereInput } from "../inputs/FoodInMealScalarWhereInput";
import { FoodInMealUpdateManyWithWhereWithoutMealInput } from "../inputs/FoodInMealUpdateManyWithWhereWithoutMealInput";
import { FoodInMealUpdateWithWhereUniqueWithoutMealInput } from "../inputs/FoodInMealUpdateWithWhereUniqueWithoutMealInput";
import { FoodInMealUpsertWithWhereUniqueWithoutMealInput } from "../inputs/FoodInMealUpsertWithWhereUniqueWithoutMealInput";
import { FoodInMealWhereUniqueInput } from "../inputs/FoodInMealWhereUniqueInput";

@TypeGraphQL.InputType("FoodInMealUpdateManyWithoutMealNestedInput", {
  isAbstract: true
})
export class FoodInMealUpdateManyWithoutMealNestedInput {
  @TypeGraphQL.Field(_type => [FoodInMealCreateWithoutMealInput], {
    nullable: true
  })
  create?: FoodInMealCreateWithoutMealInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealCreateOrConnectWithoutMealInput], {
    nullable: true
  })
  connectOrCreate?: FoodInMealCreateOrConnectWithoutMealInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealUpsertWithWhereUniqueWithoutMealInput], {
    nullable: true
  })
  upsert?: FoodInMealUpsertWithWhereUniqueWithoutMealInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodInMealCreateManyMealInputEnvelope, {
    nullable: true
  })
  createMany?: FoodInMealCreateManyMealInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FoodInMealUpdateWithWhereUniqueWithoutMealInput], {
    nullable: true
  })
  update?: FoodInMealUpdateWithWhereUniqueWithoutMealInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealUpdateManyWithWhereWithoutMealInput], {
    nullable: true
  })
  updateMany?: FoodInMealUpdateManyWithWhereWithoutMealInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FoodInMealScalarWhereInput[] | undefined;
}
