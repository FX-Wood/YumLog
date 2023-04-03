import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleAvgAggregate } from "../outputs/RoleAvgAggregate";
import { RoleCountAggregate } from "../outputs/RoleCountAggregate";
import { RoleMaxAggregate } from "../outputs/RoleMaxAggregate";
import { RoleMinAggregate } from "../outputs/RoleMinAggregate";
import { RoleSumAggregate } from "../outputs/RoleSumAggregate";

@TypeGraphQL.ObjectType("AggregateRole", {
  isAbstract: true
})
export class AggregateRole {
  @TypeGraphQL.Field(_type => RoleCountAggregate, {
    nullable: true
  })
  _count!: RoleCountAggregate | null;

  @TypeGraphQL.Field(_type => RoleAvgAggregate, {
    nullable: true
  })
  _avg!: RoleAvgAggregate | null;

  @TypeGraphQL.Field(_type => RoleSumAggregate, {
    nullable: true
  })
  _sum!: RoleSumAggregate | null;

  @TypeGraphQL.Field(_type => RoleMinAggregate, {
    nullable: true
  })
  _min!: RoleMinAggregate | null;

  @TypeGraphQL.Field(_type => RoleMaxAggregate, {
    nullable: true
  })
  _max!: RoleMaxAggregate | null;
}
