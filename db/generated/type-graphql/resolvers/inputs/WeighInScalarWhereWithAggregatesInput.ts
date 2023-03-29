import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("WeighInScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class WeighInScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [WeighInScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: WeighInScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeighInScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: WeighInScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeighInScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: WeighInScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  weight?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
