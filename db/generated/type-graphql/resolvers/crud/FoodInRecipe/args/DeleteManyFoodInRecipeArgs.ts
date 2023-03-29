import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodInRecipeWhereInput } from "../../../inputs/FoodInRecipeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFoodInRecipeArgs {
  @TypeGraphQL.Field(_type => FoodInRecipeWhereInput, {
    nullable: true
  })
  where?: FoodInRecipeWhereInput | undefined;
}
