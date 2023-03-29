import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateNestedManyWithoutFoodInput } from "../inputs/FoodInMealCreateNestedManyWithoutFoodInput";

@TypeGraphQL.InputType("FoodCreateWithoutRecipesInput", {
  isAbstract: true
})
export class FoodCreateWithoutRecipesInput {
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

  @TypeGraphQL.Field(_type => FoodInMealCreateNestedManyWithoutFoodInput, {
    nullable: true
  })
  meals?: FoodInMealCreateNestedManyWithoutFoodInput | undefined;
}
