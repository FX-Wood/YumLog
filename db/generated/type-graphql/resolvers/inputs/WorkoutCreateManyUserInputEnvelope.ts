import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkoutCreateManyUserInput } from "../inputs/WorkoutCreateManyUserInput";

@TypeGraphQL.InputType("WorkoutCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class WorkoutCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [WorkoutCreateManyUserInput], {
    nullable: false
  })
  data!: WorkoutCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
