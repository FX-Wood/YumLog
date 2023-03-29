import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkoutCreateWithoutUserInput } from "../inputs/WorkoutCreateWithoutUserInput";
import { WorkoutUpdateWithoutUserInput } from "../inputs/WorkoutUpdateWithoutUserInput";
import { WorkoutWhereUniqueInput } from "../inputs/WorkoutWhereUniqueInput";

@TypeGraphQL.InputType("WorkoutUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class WorkoutUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => WorkoutWhereUniqueInput, {
    nullable: false
  })
  where!: WorkoutWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkoutUpdateWithoutUserInput, {
    nullable: false
  })
  update!: WorkoutUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => WorkoutCreateWithoutUserInput, {
    nullable: false
  })
  create!: WorkoutCreateWithoutUserInput;
}
