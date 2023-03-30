import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealOrderByWithRelationInput } from "../inputs/MealOrderByWithRelationInput";
import { RecipeOrderByWithRelationInput } from "../inputs/RecipeOrderByWithRelationInput";
import { UnitOrderByWithRelationInput } from "../inputs/UnitOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RecipeInMealOrderByWithRelationInput", {
  isAbstract: true
})
export class RecipeInMealOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  recipeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mealId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  unitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RecipeOrderByWithRelationInput, {
    nullable: true
  })
  recipe?: RecipeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MealOrderByWithRelationInput, {
    nullable: true
  })
  meal?: MealOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => UnitOrderByWithRelationInput, {
    nullable: true
  })
  unit?: UnitOrderByWithRelationInput | undefined;
}
