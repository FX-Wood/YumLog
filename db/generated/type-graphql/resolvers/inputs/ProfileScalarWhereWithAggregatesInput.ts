import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ProfileScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ProfileScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProfileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProfileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProfileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProfileScalarWhereWithAggregatesInput[] | undefined;

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
  firstName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  lastName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  calorieGoal?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  weightGoal?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  metric?: BoolWithAggregatesFilter | undefined;
}
