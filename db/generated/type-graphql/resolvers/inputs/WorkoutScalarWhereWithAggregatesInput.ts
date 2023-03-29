import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("WorkoutScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class WorkoutScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [WorkoutScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: WorkoutScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkoutScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: WorkoutScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkoutScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: WorkoutScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  calories?: IntWithAggregatesFilter | undefined;
}
