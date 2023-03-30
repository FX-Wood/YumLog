import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodNutritionCreateManyInput } from "../../../inputs/FoodNutritionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFoodNutritionArgs {
  @TypeGraphQL.Field(_type => [FoodNutritionCreateManyInput], {
    nullable: false
  })
  data!: FoodNutritionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
