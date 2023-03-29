import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodInRecipeCreateManyInput } from "../../../inputs/FoodInRecipeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFoodInRecipeArgs {
  @TypeGraphQL.Field(_type => [FoodInRecipeCreateManyInput], {
    nullable: false
  })
  data!: FoodInRecipeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
