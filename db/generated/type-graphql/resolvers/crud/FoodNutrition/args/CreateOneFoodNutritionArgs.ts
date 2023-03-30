import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodNutritionCreateInput } from "../../../inputs/FoodNutritionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneFoodNutritionArgs {
  @TypeGraphQL.Field(_type => FoodNutritionCreateInput, {
    nullable: false
  })
  data!: FoodNutritionCreateInput;
}
