import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { FoodInMeal } from "../models/FoodInMeal";
import { User } from "../models/User";
import { MealType } from "../enums/MealType";
import { MealCount } from "../resolvers/outputs/MealCount";

@TypeGraphQL.ObjectType("Meal", {
  isAbstract: true
})
export class Meal {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => MealType, {
    nullable: false
  })
  mealType!: "BREAKFAST" | "LUNCH" | "DINNER" | "SNACK";

  foods?: FoodInMeal[];

  @TypeGraphQL.Field(_type => MealCount, {
    nullable: true
  })
  _count?: MealCount | null;
}
