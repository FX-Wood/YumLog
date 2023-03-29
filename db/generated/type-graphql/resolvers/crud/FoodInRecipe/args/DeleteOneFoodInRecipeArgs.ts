import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodInRecipeWhereUniqueInput } from "../../../inputs/FoodInRecipeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneFoodInRecipeArgs {
  @TypeGraphQL.Field(_type => FoodInRecipeWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInRecipeWhereUniqueInput;
}
