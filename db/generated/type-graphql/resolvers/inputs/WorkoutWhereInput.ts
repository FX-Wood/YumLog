import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("WorkoutWhereInput", {
  isAbstract: true
})
export class WorkoutWhereInput {
  @TypeGraphQL.Field(_type => [WorkoutWhereInput], {
    nullable: true
  })
  AND?: WorkoutWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkoutWhereInput], {
    nullable: true
  })
  OR?: WorkoutWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkoutWhereInput], {
    nullable: true
  })
  NOT?: WorkoutWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  calories?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;
}
