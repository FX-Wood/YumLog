import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutWorkoutsInput } from "../inputs/UserCreateNestedOneWithoutWorkoutsInput";

@TypeGraphQL.InputType("WorkoutCreateInput", {
  isAbstract: true
})
export class WorkoutCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutWorkoutsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutWorkoutsInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  calories!: number;
}
