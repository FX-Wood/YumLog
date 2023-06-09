import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileAvgAggregate } from "../outputs/ProfileAvgAggregate";
import { ProfileCountAggregate } from "../outputs/ProfileCountAggregate";
import { ProfileMaxAggregate } from "../outputs/ProfileMaxAggregate";
import { ProfileMinAggregate } from "../outputs/ProfileMinAggregate";
import { ProfileSumAggregate } from "../outputs/ProfileSumAggregate";

@TypeGraphQL.ObjectType("ProfileGroupBy", {
  isAbstract: true
})
export class ProfileGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  calorieGoal!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  weightGoal!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  metric!: boolean;

  @TypeGraphQL.Field(_type => ProfileCountAggregate, {
    nullable: true
  })
  _count!: ProfileCountAggregate | null;

  @TypeGraphQL.Field(_type => ProfileAvgAggregate, {
    nullable: true
  })
  _avg!: ProfileAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProfileSumAggregate, {
    nullable: true
  })
  _sum!: ProfileSumAggregate | null;

  @TypeGraphQL.Field(_type => ProfileMinAggregate, {
    nullable: true
  })
  _min!: ProfileMinAggregate | null;

  @TypeGraphQL.Field(_type => ProfileMaxAggregate, {
    nullable: true
  })
  _max!: ProfileMaxAggregate | null;
}
