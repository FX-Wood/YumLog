import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodNutritionScalarWhereInput } from "../inputs/FoodNutritionScalarWhereInput";
import { FoodNutritionUpdateManyMutationInput } from "../inputs/FoodNutritionUpdateManyMutationInput";

@TypeGraphQL.InputType("FoodNutritionUpdateManyWithWhereWithoutFoodInput", {
  isAbstract: true
})
export class FoodNutritionUpdateManyWithWhereWithoutFoodInput {
  @TypeGraphQL.Field(_type => FoodNutritionScalarWhereInput, {
    nullable: false
  })
  where!: FoodNutritionScalarWhereInput;

  @TypeGraphQL.Field(_type => FoodNutritionUpdateManyMutationInput, {
    nullable: false
  })
  data!: FoodNutritionUpdateManyMutationInput;
}
