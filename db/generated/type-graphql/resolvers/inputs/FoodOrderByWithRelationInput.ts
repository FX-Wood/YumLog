import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealOrderByRelationAggregateInput } from "../inputs/FoodInMealOrderByRelationAggregateInput";
import { FoodInRecipeOrderByRelationAggregateInput } from "../inputs/FoodInRecipeOrderByRelationAggregateInput";
import { FoodNutritionOrderByRelationAggregateInput } from "../inputs/FoodNutritionOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FoodOrderByWithRelationInput", {
  isAbstract: true
})
export class FoodOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  brand?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FoodNutritionOrderByRelationAggregateInput, {
    nullable: true
  })
  nutrition?: FoodNutritionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodInMealOrderByRelationAggregateInput, {
    nullable: true
  })
  meals?: FoodInMealOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeOrderByRelationAggregateInput, {
    nullable: true
  })
  recipes?: FoodInRecipeOrderByRelationAggregateInput | undefined;
}
