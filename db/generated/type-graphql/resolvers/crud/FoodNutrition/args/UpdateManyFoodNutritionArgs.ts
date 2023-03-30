import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodNutritionUpdateManyMutationInput } from "../../../inputs/FoodNutritionUpdateManyMutationInput";
import { FoodNutritionWhereInput } from "../../../inputs/FoodNutritionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFoodNutritionArgs {
  @TypeGraphQL.Field(_type => FoodNutritionUpdateManyMutationInput, {
    nullable: false
  })
  data!: FoodNutritionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FoodNutritionWhereInput, {
    nullable: true
  })
  where?: FoodNutritionWhereInput | undefined;
}
