import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealScalarWhereInput } from "../inputs/RecipeInMealScalarWhereInput";
import { RecipeInMealUpdateManyMutationInput } from "../inputs/RecipeInMealUpdateManyMutationInput";

@TypeGraphQL.InputType("RecipeInMealUpdateManyWithWhereWithoutUnitInput", {
  isAbstract: true
})
export class RecipeInMealUpdateManyWithWhereWithoutUnitInput {
  @TypeGraphQL.Field(_type => RecipeInMealScalarWhereInput, {
    nullable: false
  })
  where!: RecipeInMealScalarWhereInput;

  @TypeGraphQL.Field(_type => RecipeInMealUpdateManyMutationInput, {
    nullable: false
  })
  data!: RecipeInMealUpdateManyMutationInput;
}
