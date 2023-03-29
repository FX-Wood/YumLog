import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkoutCreateWithoutUserInput } from "../inputs/WorkoutCreateWithoutUserInput";
import { WorkoutWhereUniqueInput } from "../inputs/WorkoutWhereUniqueInput";

@TypeGraphQL.InputType("WorkoutCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class WorkoutCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => WorkoutWhereUniqueInput, {
    nullable: false
  })
  where!: WorkoutWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkoutCreateWithoutUserInput, {
    nullable: false
  })
  create!: WorkoutCreateWithoutUserInput;
}
