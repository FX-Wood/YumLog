import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealType } from "../../enums/MealType";

@TypeGraphQL.ObjectType("MealMaxAggregate", {
  isAbstract: true
})
export class MealMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId!: number | null;

  @TypeGraphQL.Field(_type => MealType, {
    nullable: true
  })
  mealType!: "BREAKFAST" | "LUNCH" | "DINNER" | "SNACK" | null;
}
