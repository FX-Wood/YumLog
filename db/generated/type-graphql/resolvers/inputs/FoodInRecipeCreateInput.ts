import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodCreateNestedOneWithoutRecipesInput } from "../inputs/FoodCreateNestedOneWithoutRecipesInput";
import { RecipeCreateNestedOneWithoutFoodsInput } from "../inputs/RecipeCreateNestedOneWithoutFoodsInput";
import { UnitCreateNestedOneWithoutRecipeFoodsInput } from "../inputs/UnitCreateNestedOneWithoutRecipeFoodsInput";

@TypeGraphQL.InputType("FoodInRecipeCreateInput", {
  isAbstract: true
})
export class FoodInRecipeCreateInput {
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

  @TypeGraphQL.Field(_type => UnitCreateNestedOneWithoutRecipeFoodsInput, {
    nullable: false
  })
  unit!: UnitCreateNestedOneWithoutRecipeFoodsInput;
}
