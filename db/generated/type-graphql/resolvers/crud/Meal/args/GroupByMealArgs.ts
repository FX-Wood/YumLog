import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MealOrderByWithAggregationInput } from "../../../inputs/MealOrderByWithAggregationInput";
import { MealScalarWhereWithAggregatesInput } from "../../../inputs/MealScalarWhereWithAggregatesInput";
import { MealWhereInput } from "../../../inputs/MealWhereInput";
import { MealScalarFieldEnum } from "../../../../enums/MealScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMealArgs {
  @TypeGraphQL.Field(_type => MealWhereInput, {
    nullable: true
  })
  where?: MealWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MealOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MealOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MealScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "mealType">;

  @TypeGraphQL.Field(_type => MealScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MealScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
