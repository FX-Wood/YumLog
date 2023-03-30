import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealUpdateWithoutUnitInput } from "../inputs/RecipeInMealUpdateWithoutUnitInput";
import { RecipeInMealWhereUniqueInput } from "../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.InputType("RecipeInMealUpdateWithWhereUniqueWithoutUnitInput", {
  isAbstract: true
})
export class RecipeInMealUpdateWithWhereUniqueWithoutUnitInput {
  @TypeGraphQL.Field(_type => RecipeInMealWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeInMealWhereUniqueInput;

  @TypeGraphQL.Field(_type => RecipeInMealUpdateWithoutUnitInput, {
    nullable: false
  })
  data!: RecipeInMealUpdateWithoutUnitInput;
}
