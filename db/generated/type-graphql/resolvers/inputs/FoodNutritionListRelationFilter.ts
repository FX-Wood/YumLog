import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodNutritionWhereInput } from "../inputs/FoodNutritionWhereInput";

@TypeGraphQL.InputType("FoodNutritionListRelationFilter", {
  isAbstract: true
})
export class FoodNutritionListRelationFilter {
  @TypeGraphQL.Field(_type => FoodNutritionWhereInput, {
    nullable: true
  })
  every?: FoodNutritionWhereInput | undefined;

  @TypeGraphQL.Field(_type => FoodNutritionWhereInput, {
    nullable: true
  })
  some?: FoodNutritionWhereInput | undefined;

  @TypeGraphQL.Field(_type => FoodNutritionWhereInput, {
    nullable: true
  })
  none?: FoodNutritionWhereInput | undefined;
}
