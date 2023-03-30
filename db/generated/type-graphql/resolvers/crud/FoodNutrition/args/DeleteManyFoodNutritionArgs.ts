import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodNutritionWhereInput } from "../../../inputs/FoodNutritionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFoodNutritionArgs {
  @TypeGraphQL.Field(_type => FoodNutritionWhereInput, {
    nullable: true
  })
  where?: FoodNutritionWhereInput | undefined;
}
