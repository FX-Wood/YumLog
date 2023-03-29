import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodOrderByWithAggregationInput } from "../../../inputs/FoodOrderByWithAggregationInput";
import { FoodScalarWhereWithAggregatesInput } from "../../../inputs/FoodScalarWhereWithAggregatesInput";
import { FoodWhereInput } from "../../../inputs/FoodWhereInput";
import { FoodScalarFieldEnum } from "../../../../enums/FoodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFoodArgs {
  @TypeGraphQL.Field(_type => FoodWhereInput, {
    nullable: true
  })
  where?: FoodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FoodOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FoodOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "brand" | "calories" | "protein" | "fat" | "carbs">;

  @TypeGraphQL.Field(_type => FoodScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FoodScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
