import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealCreateWithoutMealInput } from "../inputs/RecipeInMealCreateWithoutMealInput";
import { RecipeInMealUpdateWithoutMealInput } from "../inputs/RecipeInMealUpdateWithoutMealInput";
import { RecipeInMealWhereUniqueInput } from "../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.InputType("RecipeInMealUpsertWithWhereUniqueWithoutMealInput", {
  isAbstract: true
})
export class RecipeInMealUpsertWithWhereUniqueWithoutMealInput {
  @TypeGraphQL.Field(_type => RecipeInMealWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeInMealWhereUniqueInput;

  @TypeGraphQL.Field(_type => RecipeInMealUpdateWithoutMealInput, {
    nullable: false
  })
  update!: RecipeInMealUpdateWithoutMealInput;

  @TypeGraphQL.Field(_type => RecipeInMealCreateWithoutMealInput, {
    nullable: false
  })
  create!: RecipeInMealCreateWithoutMealInput;
}
