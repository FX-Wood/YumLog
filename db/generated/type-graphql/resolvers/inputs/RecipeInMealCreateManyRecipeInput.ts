import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("RecipeInMealCreateManyRecipeInput", {
  isAbstract: true
})
export class RecipeInMealCreateManyRecipeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  mealId!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantity!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  unitId!: number;
}
