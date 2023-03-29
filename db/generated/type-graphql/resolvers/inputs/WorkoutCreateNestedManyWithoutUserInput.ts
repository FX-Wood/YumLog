import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkoutCreateManyUserInputEnvelope } from "../inputs/WorkoutCreateManyUserInputEnvelope";
import { WorkoutCreateOrConnectWithoutUserInput } from "../inputs/WorkoutCreateOrConnectWithoutUserInput";
import { WorkoutCreateWithoutUserInput } from "../inputs/WorkoutCreateWithoutUserInput";
import { WorkoutWhereUniqueInput } from "../inputs/WorkoutWhereUniqueInput";

@TypeGraphQL.InputType("WorkoutCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class WorkoutCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [WorkoutCreateWithoutUserInput], {
    nullable: true
  })
  create?: WorkoutCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkoutCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkoutCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: WorkoutCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WorkoutWhereUniqueInput], {
    nullable: true
  })
  connect?: WorkoutWhereUniqueInput[] | undefined;
}
