import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealCreateNestedOneWithoutRecipesInput } from "../inputs/MealCreateNestedOneWithoutRecipesInput";
import { RecipeCreateNestedOneWithoutMealsInput } from "../inputs/RecipeCreateNestedOneWithoutMealsInput";
import { UnitCreateNestedOneWithoutMealRecipeInput } from "../inputs/UnitCreateNestedOneWithoutMealRecipeInput";

@TypeGraphQL.InputType("RecipeInMealCreateInput", {
  isAbstract: true
})
export class RecipeInMealCreateInput {
  @TypeGraphQL.Field(_type => RecipeCreateNestedOneWithoutMealsInput, {
    nullable: false
  })
  recipe!: RecipeCreateNestedOneWithoutMealsInput;

  @TypeGraphQL.Field(_type => MealCreateNestedOneWithoutRecipesInput, {
    nullable: false
  })
  meal!: MealCreateNestedOneWithoutRecipesInput;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantity!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => UnitCreateNestedOneWithoutMealRecipeInput, {
    nullable: false
  })
  unit!: UnitCreateNestedOneWithoutMealRecipeInput;
}
