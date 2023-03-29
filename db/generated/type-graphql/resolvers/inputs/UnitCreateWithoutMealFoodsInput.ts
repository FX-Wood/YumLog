import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateNestedManyWithoutUnitInput } from "../inputs/FoodInRecipeCreateNestedManyWithoutUnitInput";

@TypeGraphQL.InputType("UnitCreateWithoutMealFoodsInput", {
  isAbstract: true
})
export class UnitCreateWithoutMealFoodsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  abbreviation!: string;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateNestedManyWithoutUnitInput, {
    nullable: true
  })
  recipeFoods?: FoodInRecipeCreateNestedManyWithoutUnitInput | undefined;
}
