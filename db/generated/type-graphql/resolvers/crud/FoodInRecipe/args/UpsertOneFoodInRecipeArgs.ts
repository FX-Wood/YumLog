import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodInRecipeCreateInput } from "../../../inputs/FoodInRecipeCreateInput";
import { FoodInRecipeUpdateInput } from "../../../inputs/FoodInRecipeUpdateInput";
import { FoodInRecipeWhereUniqueInput } from "../../../inputs/FoodInRecipeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneFoodInRecipeArgs {
  @TypeGraphQL.Field(_type => FoodInRecipeWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInRecipeWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateInput, {
    nullable: false
  })
  create!: FoodInRecipeCreateInput;

  @TypeGraphQL.Field(_type => FoodInRecipeUpdateInput, {
    nullable: false
  })
  update!: FoodInRecipeUpdateInput;
}
