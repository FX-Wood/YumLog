import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeighInCreateManyUserInputEnvelope } from "../inputs/WeighInCreateManyUserInputEnvelope";
import { WeighInCreateOrConnectWithoutUserInput } from "../inputs/WeighInCreateOrConnectWithoutUserInput";
import { WeighInCreateWithoutUserInput } from "../inputs/WeighInCreateWithoutUserInput";
import { WeighInScalarWhereInput } from "../inputs/WeighInScalarWhereInput";
import { WeighInUpdateManyWithWhereWithoutUserInput } from "../inputs/WeighInUpdateManyWithWhereWithoutUserInput";
import { WeighInUpdateWithWhereUniqueWithoutUserInput } from "../inputs/WeighInUpdateWithWhereUniqueWithoutUserInput";
import { WeighInUpsertWithWhereUniqueWithoutUserInput } from "../inputs/WeighInUpsertWithWhereUniqueWithoutUserInput";
import { WeighInWhereUniqueInput } from "../inputs/WeighInWhereUniqueInput";

@TypeGraphQL.InputType("WeighInUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class WeighInUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [WeighInCreateWithoutUserInput], {
    nullable: true
  })
  create?: WeighInCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeighInCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: WeighInCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeighInUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: WeighInUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => WeighInCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: WeighInCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WeighInWhereUniqueInput], {
    nullable: true
  })
  set?: WeighInWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeighInWhereUniqueInput], {
    nullable: true
  })
  disconnect?: WeighInWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeighInWhereUniqueInput], {
    nullable: true
  })
  delete?: WeighInWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeighInWhereUniqueInput], {
    nullable: true
  })
  connect?: WeighInWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeighInUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: WeighInUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeighInUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: WeighInUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeighInScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WeighInScalarWhereInput[] | undefined;
}
