import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeInMealCreateManyInput } from "../../../inputs/RecipeInMealCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRecipeInMealArgs {
  @TypeGraphQL.Field(_type => [RecipeInMealCreateManyInput], {
    nullable: false
  })
  data!: RecipeInMealCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
