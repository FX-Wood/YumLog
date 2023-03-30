import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodOrderByWithRelationInput } from "../inputs/FoodOrderByWithRelationInput";
import { MealOrderByWithRelationInput } from "../inputs/MealOrderByWithRelationInput";
import { UnitOrderByWithRelationInput } from "../inputs/UnitOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FoodInMealOrderByWithRelationInput", {
  isAbstract: true
})
export class FoodInMealOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  foodId?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => FoodOrderByWithRelationInput, {
    nullable: true
  })
  food?: FoodOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MealOrderByWithRelationInput, {
    nullable: true
  })
  meal?: MealOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => UnitOrderByWithRelationInput, {
    nullable: true
  })
  unit?: UnitOrderByWithRelationInput | undefined;
}
