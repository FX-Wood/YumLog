import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealOrderByRelationAggregateInput } from "../inputs/FoodInMealOrderByRelationAggregateInput";
import { FoodInRecipeOrderByRelationAggregateInput } from "../inputs/FoodInRecipeOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UnitOrderByWithRelationInput", {
  isAbstract: true
})
export class UnitOrderByWithRelationInput {
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
  abbreviation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FoodInMealOrderByRelationAggregateInput, {
    nullable: true
  })
  mealFoods?: FoodInMealOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeOrderByRelationAggregateInput, {
    nullable: true
  })
  recipeFoods?: FoodInRecipeOrderByRelationAggregateInput | undefined;
}
