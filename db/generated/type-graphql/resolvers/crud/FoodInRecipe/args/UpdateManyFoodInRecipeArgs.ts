import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodInRecipeUpdateManyMutationInput } from "../../../inputs/FoodInRecipeUpdateManyMutationInput";
import { FoodInRecipeWhereInput } from "../../../inputs/FoodInRecipeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFoodInRecipeArgs {
  @TypeGraphQL.Field(_type => FoodInRecipeUpdateManyMutationInput, {
    nullable: false
  })
  data!: FoodInRecipeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FoodInRecipeWhereInput, {
    nullable: true
  })
  where?: FoodInRecipeWhereInput | undefined;
}
