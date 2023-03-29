import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealWhereInput } from "../inputs/FoodInMealWhereInput";

@TypeGraphQL.InputType("FoodInMealListRelationFilter", {
  isAbstract: true
})
export class FoodInMealListRelationFilter {
  @TypeGraphQL.Field(_type => FoodInMealWhereInput, {
    nullable: true
  })
  every?: FoodInMealWhereInput | undefined;

  @TypeGraphQL.Field(_type => FoodInMealWhereInput, {
    nullable: true
  })
  some?: FoodInMealWhereInput | undefined;

  @TypeGraphQL.Field(_type => FoodInMealWhereInput, {
    nullable: true
  })
  none?: FoodInMealWhereInput | undefined;
}
