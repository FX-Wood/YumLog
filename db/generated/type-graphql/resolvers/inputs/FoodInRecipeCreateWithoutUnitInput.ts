import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodCreateNestedOneWithoutRecipesInput } from "../inputs/FoodCreateNestedOneWithoutRecipesInput";
import { RecipeCreateNestedOneWithoutFoodsInput } from "../inputs/RecipeCreateNestedOneWithoutFoodsInput";

@TypeGraphQL.InputType("FoodInRecipeCreateWithoutUnitInput", {
  isAbstract: true
})
export class FoodInRecipeCreateWithoutUnitInput {
  @TypeGraphQL.Field(_type => FoodCreateNestedOneWithoutRecipesInput, {
    nullable: false
  })
  food!: FoodCreateNestedOneWithoutRecipesInput;

  @TypeGraphQL.Field(_type => RecipeCreateNestedOneWithoutFoodsInput, {
    nullable: false
  })
  recipe!: RecipeCreateNestedOneWithoutFoodsInput;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantity!: Prisma.Decimal;
}
