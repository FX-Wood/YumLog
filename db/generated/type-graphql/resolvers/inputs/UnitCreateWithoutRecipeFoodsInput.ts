import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateNestedManyWithoutUnitInput } from "../inputs/FoodInMealCreateNestedManyWithoutUnitInput";

@TypeGraphQL.InputType("UnitCreateWithoutRecipeFoodsInput", {
  isAbstract: true
})
export class UnitCreateWithoutRecipeFoodsInput {
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
}
