import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodInRecipeUpdateInput } from "../../../inputs/FoodInRecipeUpdateInput";
import { FoodInRecipeWhereUniqueInput } from "../../../inputs/FoodInRecipeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneFoodInRecipeArgs {
  @TypeGraphQL.Field(_type => FoodInRecipeUpdateInput, {
    nullable: false
  })
  data!: FoodInRecipeUpdateInput;

  @TypeGraphQL.Field(_type => FoodInRecipeWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInRecipeWhereUniqueInput;
}
