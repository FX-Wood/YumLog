import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkoutCreateManyUserInputEnvelope } from "../inputs/WorkoutCreateManyUserInputEnvelope";
import { WorkoutCreateOrConnectWithoutUserInput } from "../inputs/WorkoutCreateOrConnectWithoutUserInput";
import { WorkoutCreateWithoutUserInput } from "../inputs/WorkoutCreateWithoutUserInput";
import { WorkoutScalarWhereInput } from "../inputs/WorkoutScalarWhereInput";
import { WorkoutUpdateManyWithWhereWithoutUserInput } from "../inputs/WorkoutUpdateManyWithWhereWithoutUserInput";
import { WorkoutUpdateWithWhereUniqueWithoutUserInput } from "../inputs/WorkoutUpdateWithWhereUniqueWithoutUserInput";
import { WorkoutUpsertWithWhereUniqueWithoutUserInput } from "../inputs/WorkoutUpsertWithWhereUniqueWithoutUserInput";
import { WorkoutWhereUniqueInput } from "../inputs/WorkoutWhereUniqueInput";

@TypeGraphQL.InputType("WorkoutUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class WorkoutUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [WorkoutCreateWithoutUserInput], {
    nullable: true
  })
  create?: WorkoutCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkoutCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkoutUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: WorkoutUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkoutCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: WorkoutCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WorkoutWhereUniqueInput], {
    nullable: true
  })
  set?: WorkoutWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkoutWhereUniqueInput], {
    nullable: true
  })
  disconnect?: WorkoutWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkoutWhereUniqueInput], {
    nullable: true
  })
  delete?: WorkoutWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkoutWhereUniqueInput], {
    nullable: true
  })
  connect?: WorkoutWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkoutUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: WorkoutUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkoutUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: WorkoutUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkoutScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WorkoutScalarWhereInput[] | undefined;
}
