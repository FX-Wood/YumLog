import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealOrderByRelationAggregateInput } from "../inputs/FoodInMealOrderByRelationAggregateInput";
import { RecipeInMealOrderByRelationAggregateInput } from "../inputs/RecipeInMealOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MealOrderByWithRelationInput", {
  isAbstract: true
})
export class MealOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mealType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => FoodInMealOrderByRelationAggregateInput, {
    nullable: true
  })
  foods?: FoodInMealOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealOrderByRelationAggregateInput, {
    nullable: true
  })
  recipes?: RecipeInMealOrderByRelationAggregateInput | undefined;
}
