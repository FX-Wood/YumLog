import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateNestedManyWithoutFoodInput } from "../inputs/FoodInRecipeCreateNestedManyWithoutFoodInput";

@TypeGraphQL.InputType("FoodCreateWithoutMealsInput", {
  isAbstract: true
})
export class FoodCreateWithoutMealsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  brand!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  calories!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  protein!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  fat!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  carbs!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateNestedManyWithoutFoodInput, {
    nullable: true
  })
  recipes?: FoodInRecipeCreateNestedManyWithoutFoodInput | undefined;
}
