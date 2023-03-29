import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateNestedManyWithoutUnitInput } from "../inputs/FoodInMealCreateNestedManyWithoutUnitInput";
import { FoodInRecipeCreateNestedManyWithoutUnitInput } from "../inputs/FoodInRecipeCreateNestedManyWithoutUnitInput";

@TypeGraphQL.InputType("UnitCreateInput", {
  isAbstract: true
})
export class UnitCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  abbreviation!: string;

  @TypeGraphQL.Field(_type => FoodInMealCreateNestedManyWithoutUnitInput, {
    nullable: true
  })
  mealFoods?: FoodInMealCreateNestedManyWithoutUnitInput | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateNestedManyWithoutUnitInput, {
    nullable: true
  })
  recipeFoods?: FoodInRecipeCreateNestedManyWithoutUnitInput | undefined;
}
