import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkoutWhereInput } from "../inputs/WorkoutWhereInput";

@TypeGraphQL.InputType("WorkoutListRelationFilter", {
  isAbstract: true
})
export class WorkoutListRelationFilter {
  @TypeGraphQL.Field(_type => WorkoutWhereInput, {
    nullable: true
  })
  every?: WorkoutWhereInput | undefined;

  @TypeGraphQL.Field(_type => WorkoutWhereInput, {
    nullable: true
  })
  some?: WorkoutWhereInput | undefined;

  @TypeGraphQL.Field(_type => WorkoutWhereInput, {
    nullable: true
  })
  none?: WorkoutWhereInput | undefined;
}
