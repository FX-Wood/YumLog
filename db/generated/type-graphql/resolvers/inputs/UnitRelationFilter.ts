import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitWhereInput } from "../inputs/UnitWhereInput";

@TypeGraphQL.InputType("UnitRelationFilter", {
  isAbstract: true
})
export class UnitRelationFilter {
  @TypeGraphQL.Field(_type => UnitWhereInput, {
    nullable: true
  })
  is?: UnitWhereInput | undefined;

  @TypeGraphQL.Field(_type => UnitWhereInput, {
    nullable: true
  })
  isNot?: UnitWhereInput | undefined;
}
