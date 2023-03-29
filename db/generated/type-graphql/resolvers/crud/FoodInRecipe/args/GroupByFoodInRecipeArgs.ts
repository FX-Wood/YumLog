import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodInRecipeOrderByWithAggregationInput } from "../../../inputs/FoodInRecipeOrderByWithAggregationInput";
import { FoodInRecipeScalarWhereWithAggregatesInput } from "../../../inputs/FoodInRecipeScalarWhereWithAggregatesInput";
import { FoodInRecipeWhereInput } from "../../../inputs/FoodInRecipeWhereInput";
import { FoodInRecipeScalarFieldEnum } from "../../../../enums/FoodInRecipeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFoodInRecipeArgs {
  @TypeGraphQL.Field(_type => FoodInRecipeWhereInput, {
    nullable: true
  })
  where?: FoodInRecipeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FoodInRecipeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "foodId" | "recipeId" | "quantity" | "unitId">;

  @TypeGraphQL.Field(_type => FoodInRecipeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FoodInRecipeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
