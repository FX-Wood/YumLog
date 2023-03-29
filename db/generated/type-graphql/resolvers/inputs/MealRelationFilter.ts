import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealWhereInput } from "../inputs/MealWhereInput";

@TypeGraphQL.InputType("MealRelationFilter", {
  isAbstract: true
})
export class MealRelationFilter {
  @TypeGraphQL.Field(_type => MealWhereInput, {
    nullable: true
  })
  is?: MealWhereInput | undefined;

  @TypeGraphQL.Field(_type => MealWhereInput, {
    nullable: true
  })
  isNot?: MealWhereInput | undefined;
}
