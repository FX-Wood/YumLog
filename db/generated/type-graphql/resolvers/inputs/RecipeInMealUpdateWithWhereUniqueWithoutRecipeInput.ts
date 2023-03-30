import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealUpdateWithoutRecipeInput } from "../inputs/RecipeInMealUpdateWithoutRecipeInput";
import { RecipeInMealWhereUniqueInput } from "../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.InputType("RecipeInMealUpdateWithWhereUniqueWithoutRecipeInput", {
  isAbstract: true
})
export class RecipeInMealUpdateWithWhereUniqueWithoutRecipeInput {
  @TypeGraphQL.Field(_type => RecipeInMealWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeInMealWhereUniqueInput;

  @TypeGraphQL.Field(_type => RecipeInMealUpdateWithoutRecipeInput, {
    nullable: false
  })
  data!: RecipeInMealUpdateWithoutRecipeInput;
}
