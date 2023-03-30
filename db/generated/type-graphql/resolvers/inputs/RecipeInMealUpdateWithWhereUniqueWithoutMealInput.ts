import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealUpdateWithoutMealInput } from "../inputs/RecipeInMealUpdateWithoutMealInput";
import { RecipeInMealWhereUniqueInput } from "../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.InputType("RecipeInMealUpdateWithWhereUniqueWithoutMealInput", {
  isAbstract: true
})
export class RecipeInMealUpdateWithWhereUniqueWithoutMealInput {
  @TypeGraphQL.Field(_type => RecipeInMealWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeInMealWhereUniqueInput;

  @TypeGraphQL.Field(_type => RecipeInMealUpdateWithoutMealInput, {
    nullable: false
  })
  data!: RecipeInMealUpdateWithoutMealInput;
}
