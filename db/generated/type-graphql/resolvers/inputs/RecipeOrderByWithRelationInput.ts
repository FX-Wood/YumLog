import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeOrderByRelationAggregateInput } from "../inputs/FoodInRecipeOrderByRelationAggregateInput";
import { RecipeInMealOrderByRelationAggregateInput } from "../inputs/RecipeInMealOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RecipeOrderByWithRelationInput", {
  isAbstract: true
})
export class RecipeOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeOrderByRelationAggregateInput, {
    nullable: true
  })
  foods?: FoodInRecipeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealOrderByRelationAggregateInput, {
    nullable: true
  })
  meals?: RecipeInMealOrderByRelationAggregateInput | undefined;
}
