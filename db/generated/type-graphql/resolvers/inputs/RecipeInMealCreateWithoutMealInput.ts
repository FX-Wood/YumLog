import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeCreateNestedOneWithoutMealsInput } from "../inputs/RecipeCreateNestedOneWithoutMealsInput";
import { UnitCreateNestedOneWithoutMealRecipeInput } from "../inputs/UnitCreateNestedOneWithoutMealRecipeInput";

@TypeGraphQL.InputType("RecipeInMealCreateWithoutMealInput", {
  isAbstract: true
})
export class RecipeInMealCreateWithoutMealInput {
  @TypeGraphQL.Field(_type => RecipeCreateNestedOneWithoutMealsInput, {
    nullable: false
  })
  recipe!: RecipeCreateNestedOneWithoutMealsInput;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantity!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => UnitCreateNestedOneWithoutMealRecipeInput, {
    nullable: false
  })
  unit!: UnitCreateNestedOneWithoutMealRecipeInput;
}
