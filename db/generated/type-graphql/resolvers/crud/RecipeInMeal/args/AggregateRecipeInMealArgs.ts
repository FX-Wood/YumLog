import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeInMealOrderByWithRelationInput } from "../../../inputs/RecipeInMealOrderByWithRelationInput";
import { RecipeInMealWhereInput } from "../../../inputs/RecipeInMealWhereInput";
import { RecipeInMealWhereUniqueInput } from "../../../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRecipeInMealArgs {
  @TypeGraphQL.Field(_type => RecipeInMealWhereInput, {
    nullable: true
  })
  where?: RecipeInMealWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RecipeInMealOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealWhereUniqueInput, {
    nullable: true
  })
  cursor?: RecipeInMealWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
