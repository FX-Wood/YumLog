import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodNutritionCreateInput } from "../../../inputs/FoodNutritionCreateInput";
import { FoodNutritionUpdateInput } from "../../../inputs/FoodNutritionUpdateInput";
import { FoodNutritionWhereUniqueInput } from "../../../inputs/FoodNutritionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneFoodNutritionArgs {
  @TypeGraphQL.Field(_type => FoodNutritionWhereUniqueInput, {
    nullable: false
  })
  where!: FoodNutritionWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodNutritionCreateInput, {
    nullable: false
  })
  create!: FoodNutritionCreateInput;

  @TypeGraphQL.Field(_type => FoodNutritionUpdateInput, {
    nullable: false
  })
  update!: FoodNutritionUpdateInput;
}
