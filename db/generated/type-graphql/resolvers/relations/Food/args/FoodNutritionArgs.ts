import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodNutritionOrderByWithRelationInput } from "../../../inputs/FoodNutritionOrderByWithRelationInput";
import { FoodNutritionWhereInput } from "../../../inputs/FoodNutritionWhereInput";
import { FoodNutritionWhereUniqueInput } from "../../../inputs/FoodNutritionWhereUniqueInput";
import { FoodNutritionScalarFieldEnum } from "../../../../enums/FoodNutritionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FoodNutritionArgs {
  @TypeGraphQL.Field(_type => FoodNutritionWhereInput, {
    nullable: true
  })
  where?: FoodNutritionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FoodNutritionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodNutritionWhereUniqueInput, {
    nullable: true
  })
  cursor?: FoodNutritionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "foodId" | "quantity" | "unitId" | "calories" | "protein" | "fat" | "carbs"> | undefined;
}
