import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("WeighInScalarWhereInput", {
  isAbstract: true
})
export class WeighInScalarWhereInput {
  @TypeGraphQL.Field(_type => [WeighInScalarWhereInput], {
    nullable: true
  })
  AND?: WeighInScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeighInScalarWhereInput], {
    nullable: true
  })
  OR?: WeighInScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeighInScalarWhereInput], {
    nullable: true
  })
  NOT?: WeighInScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  weight?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
