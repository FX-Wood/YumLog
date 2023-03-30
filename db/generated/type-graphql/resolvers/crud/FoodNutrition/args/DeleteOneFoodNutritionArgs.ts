import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodNutritionWhereUniqueInput } from "../../../inputs/FoodNutritionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneFoodNutritionArgs {
  @TypeGraphQL.Field(_type => FoodNutritionWhereUniqueInput, {
    nullable: false
  })
  where!: FoodNutritionWhereUniqueInput;
}
