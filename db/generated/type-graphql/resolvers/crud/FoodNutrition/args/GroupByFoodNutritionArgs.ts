import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodNutritionOrderByWithAggregationInput } from "../../../inputs/FoodNutritionOrderByWithAggregationInput";
import { FoodNutritionScalarWhereWithAggregatesInput } from "../../../inputs/FoodNutritionScalarWhereWithAggregatesInput";
import { FoodNutritionWhereInput } from "../../../inputs/FoodNutritionWhereInput";
import { FoodNutritionScalarFieldEnum } from "../../../../enums/FoodNutritionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFoodNutritionArgs {
  @TypeGraphQL.Field(_type => FoodNutritionWhereInput, {
    nullable: true
  })
  where?: FoodNutritionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FoodNutritionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "foodId" | "quantity" | "unitId" | "calories" | "protein" | "fat" | "carbs">;

  @TypeGraphQL.Field(_type => FoodNutritionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FoodNutritionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
