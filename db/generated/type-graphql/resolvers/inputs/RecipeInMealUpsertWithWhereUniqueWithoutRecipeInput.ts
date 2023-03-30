import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealCreateWithoutRecipeInput } from "../inputs/RecipeInMealCreateWithoutRecipeInput";
import { RecipeInMealUpdateWithoutRecipeInput } from "../inputs/RecipeInMealUpdateWithoutRecipeInput";
import { RecipeInMealWhereUniqueInput } from "../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.InputType("RecipeInMealUpsertWithWhereUniqueWithoutRecipeInput", {
  isAbstract: true
})
export class RecipeInMealUpsertWithWhereUniqueWithoutRecipeInput {
  @TypeGraphQL.Field(_type => RecipeInMealWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeInMealWhereUniqueInput;

  @TypeGraphQL.Field(_type => RecipeInMealUpdateWithoutRecipeInput, {
    nullable: false
  })
  update!: RecipeInMealUpdateWithoutRecipeInput;

  @TypeGraphQL.Field(_type => RecipeInMealCreateWithoutRecipeInput, {
    nullable: false
  })
  create!: RecipeInMealCreateWithoutRecipeInput;
}
