import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkoutUpdateWithoutUserInput } from "../inputs/WorkoutUpdateWithoutUserInput";
import { WorkoutWhereUniqueInput } from "../inputs/WorkoutWhereUniqueInput";

@TypeGraphQL.InputType("WorkoutUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class WorkoutUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => WorkoutWhereUniqueInput, {
    nullable: false
  })
  where!: WorkoutWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkoutUpdateWithoutUserInput, {
    nullable: false
  })
  data!: WorkoutUpdateWithoutUserInput;
}
