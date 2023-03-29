import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealCreateManyUserInputEnvelope } from "../inputs/MealCreateManyUserInputEnvelope";
import { MealCreateOrConnectWithoutUserInput } from "../inputs/MealCreateOrConnectWithoutUserInput";
import { MealCreateWithoutUserInput } from "../inputs/MealCreateWithoutUserInput";
import { MealScalarWhereInput } from "../inputs/MealScalarWhereInput";
import { MealUpdateManyWithWhereWithoutUserInput } from "../inputs/MealUpdateManyWithWhereWithoutUserInput";
import { MealUpdateWithWhereUniqueWithoutUserInput } from "../inputs/MealUpdateWithWhereUniqueWithoutUserInput";
import { MealUpsertWithWhereUniqueWithoutUserInput } from "../inputs/MealUpsertWithWhereUniqueWithoutUserInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";

@TypeGraphQL.InputType("MealUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class MealUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [MealCreateWithoutUserInput], {
    nullable: true
  })
  create?: MealCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MealCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MealCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MealUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: MealUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MealCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MealCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MealWhereUniqueInput], {
    nullable: true
  })
  set?: MealWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MealWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MealWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MealWhereUniqueInput], {
    nullable: true
  })
  delete?: MealWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MealWhereUniqueInput], {
    nullable: true
  })
  connect?: MealWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MealUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: MealUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MealUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: MealUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MealScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MealScalarWhereInput[] | undefined;
}
