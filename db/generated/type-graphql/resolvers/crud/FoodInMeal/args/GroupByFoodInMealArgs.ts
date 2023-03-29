import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodInMealOrderByWithAggregationInput } from "../../../inputs/FoodInMealOrderByWithAggregationInput";
import { FoodInMealScalarWhereWithAggregatesInput } from "../../../inputs/FoodInMealScalarWhereWithAggregatesInput";
import { FoodInMealWhereInput } from "../../../inputs/FoodInMealWhereInput";
import { FoodInMealScalarFieldEnum } from "../../../../enums/FoodInMealScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFoodInMealArgs {
  @TypeGraphQL.Field(_type => FoodInMealWhereInput, {
    nullable: true
  })
  where?: FoodInMealWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FoodInMealOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "foodId" | "mealId" | "quantity" | "unitId">;

  @TypeGraphQL.Field(_type => FoodInMealScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FoodInMealScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
