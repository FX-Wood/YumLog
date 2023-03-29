import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealWhereInput } from "../inputs/MealWhereInput";

@TypeGraphQL.InputType("MealListRelationFilter", {
  isAbstract: true
})
export class MealListRelationFilter {
  @TypeGraphQL.Field(_type => MealWhereInput, {
    nullable: true
  })
  every?: MealWhereInput | undefined;

  @TypeGraphQL.Field(_type => MealWhereInput, {
    nullable: true
  })
  some?: MealWhereInput | undefined;

  @TypeGraphQL.Field(_type => MealWhereInput, {
    nullable: true
  })
  none?: MealWhereInput | undefined;
}
