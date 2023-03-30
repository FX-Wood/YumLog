import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealCreateWithoutRecipeInput } from "../inputs/RecipeInMealCreateWithoutRecipeInput";
import { RecipeInMealWhereUniqueInput } from "../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.InputType("RecipeInMealCreateOrConnectWithoutRecipeInput", {
  isAbstract: true
})
export class RecipeInMealCreateOrConnectWithoutRecipeInput {
  @TypeGraphQL.Field(_type => RecipeInMealWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeInMealWhereUniqueInput;

  @TypeGraphQL.Field(_type => RecipeInMealCreateWithoutRecipeInput, {
    nullable: false
  })
  create!: RecipeInMealCreateWithoutRecipeInput;
}
