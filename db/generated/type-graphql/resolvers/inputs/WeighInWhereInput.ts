import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("WeighInWhereInput", {
  isAbstract: true
})
export class WeighInWhereInput {
  @TypeGraphQL.Field(_type => [WeighInWhereInput], {
    nullable: true
  })
  AND?: WeighInWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeighInWhereInput], {
    nullable: true
  })
  OR?: WeighInWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeighInWhereInput], {
    nullable: true
  })
  NOT?: WeighInWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

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
