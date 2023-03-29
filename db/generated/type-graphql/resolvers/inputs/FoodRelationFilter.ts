import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodWhereInput } from "../inputs/FoodWhereInput";

@TypeGraphQL.InputType("FoodRelationFilter", {
  isAbstract: true
})
export class FoodRelationFilter {
  @TypeGraphQL.Field(_type => FoodWhereInput, {
    nullable: true
  })
  is?: FoodWhereInput | undefined;

  @TypeGraphQL.Field(_type => FoodWhereInput, {
    nullable: true
  })
  isNot?: FoodWhereInput | undefined;
}
