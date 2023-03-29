import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { FoodInMeal } from "../models/FoodInMeal";
import { FoodInRecipe } from "../models/FoodInRecipe";
import { UnitCount } from "../resolvers/outputs/UnitCount";

@TypeGraphQL.ObjectType("Unit", {
  isAbstract: true
})
export class Unit {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  abbreviation!: string;

  mealFoods?: FoodInMeal[];

  recipeFoods?: FoodInRecipe[];

  @TypeGraphQL.Field(_type => UnitCount, {
    nullable: true
  })
  _count?: UnitCount | null;
}
