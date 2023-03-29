import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkoutScalarWhereInput } from "../inputs/WorkoutScalarWhereInput";
import { WorkoutUpdateManyMutationInput } from "../inputs/WorkoutUpdateManyMutationInput";

@TypeGraphQL.InputType("WorkoutUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class WorkoutUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => WorkoutScalarWhereInput, {
    nullable: false
  })
  where!: WorkoutScalarWhereInput;

  @TypeGraphQL.Field(_type => WorkoutUpdateManyMutationInput, {
    nullable: false
  })
  data!: WorkoutUpdateManyMutationInput;
}
