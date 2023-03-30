import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealCreateNestedOneWithoutRecipesInput } from "../inputs/MealCreateNestedOneWithoutRecipesInput";
import { UnitCreateNestedOneWithoutMealRecipeInput } from "../inputs/UnitCreateNestedOneWithoutMealRecipeInput";

@TypeGraphQL.InputType("RecipeInMealCreateWithoutRecipeInput", {
  isAbstract: true
})
export class RecipeInMealCreateWithoutRecipeInput {
  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantity!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => MealCreateNestedOneWithoutRecipesInput, {
    nullable: false
  })
  meal!: MealCreateNestedOneWithoutRecipesInput;

  @TypeGraphQL.Field(_type => UnitCreateNestedOneWithoutMealRecipeInput, {
    nullable: false
  })
  unit!: UnitCreateNestedOneWithoutMealRecipeInput;
}
