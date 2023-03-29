import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodInRecipeCreateInput } from "../../../inputs/FoodInRecipeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneFoodInRecipeArgs {
  @TypeGraphQL.Field(_type => FoodInRecipeCreateInput, {
    nullable: false
  })
  data!: FoodInRecipeCreateInput;
}
