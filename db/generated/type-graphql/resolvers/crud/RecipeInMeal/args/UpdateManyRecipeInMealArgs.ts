import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeInMealUpdateManyMutationInput } from "../../../inputs/RecipeInMealUpdateManyMutationInput";
import { RecipeInMealWhereInput } from "../../../inputs/RecipeInMealWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRecipeInMealArgs {
  @TypeGraphQL.Field(_type => RecipeInMealUpdateManyMutationInput, {
    nullable: false
  })
  data!: RecipeInMealUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RecipeInMealWhereInput, {
    nullable: true
  })
  where?: RecipeInMealWhereInput | undefined;
}
