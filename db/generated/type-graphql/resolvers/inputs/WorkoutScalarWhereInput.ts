import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("WorkoutScalarWhereInput", {
  isAbstract: true
})
export class WorkoutScalarWhereInput {
  @TypeGraphQL.Field(_type => [WorkoutScalarWhereInput], {
    nullable: true
  })
  AND?: WorkoutScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkoutScalarWhereInput], {
    nullable: true
  })
  OR?: WorkoutScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkoutScalarWhereInput], {
    nullable: true
  })
  NOT?: WorkoutScalarWhereInput[] | undefined;

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
}
