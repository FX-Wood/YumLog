import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodNutritionUpdateInput } from "../../../inputs/FoodNutritionUpdateInput";
import { FoodNutritionWhereUniqueInput } from "../../../inputs/FoodNutritionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneFoodNutritionArgs {
  @TypeGraphQL.Field(_type => FoodNutritionUpdateInput, {
    nullable: false
  })
  data!: FoodNutritionUpdateInput;

  @TypeGraphQL.Field(_type => FoodNutritionWhereUniqueInput, {
    nullable: false
  })
  where!: FoodNutritionWhereUniqueInput;
}
