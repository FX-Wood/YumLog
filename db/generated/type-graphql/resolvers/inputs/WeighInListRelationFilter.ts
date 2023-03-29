import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeighInWhereInput } from "../inputs/WeighInWhereInput";

@TypeGraphQL.InputType("WeighInListRelationFilter", {
  isAbstract: true
})
export class WeighInListRelationFilter {
  @TypeGraphQL.Field(_type => WeighInWhereInput, {
    nullable: true
  })
  every?: WeighInWhereInput | undefined;

  @TypeGraphQL.Field(_type => WeighInWhereInput, {
    nullable: true
  })
  some?: WeighInWhereInput | undefined;

  @TypeGraphQL.Field(_type => WeighInWhereInput, {
    nullable: true
  })
  none?: WeighInWhereInput | undefined;
}
