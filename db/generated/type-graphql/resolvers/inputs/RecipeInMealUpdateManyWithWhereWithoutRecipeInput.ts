import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealScalarWhereInput } from "../inputs/RecipeInMealScalarWhereInput";
import { RecipeInMealUpdateManyMutationInput } from "../inputs/RecipeInMealUpdateManyMutationInput";

@TypeGraphQL.InputType("RecipeInMealUpdateManyWithWhereWithoutRecipeInput", {
  isAbstract: true
})
export class RecipeInMealUpdateManyWithWhereWithoutRecipeInput {
  @TypeGraphQL.Field(_type => RecipeInMealScalarWhereInput, {
    nullable: false
  })
  where!: RecipeInMealScalarWhereInput;

  @TypeGraphQL.Field(_type => RecipeInMealUpdateManyMutationInput, {
    nullable: false
  })
  data!: RecipeInMealUpdateManyMutationInput;
}
