import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RecipeInMealOrderByWithRelationInput } from "../../../inputs/RecipeInMealOrderByWithRelationInput";
import { RecipeInMealWhereInput } from "../../../inputs/RecipeInMealWhereInput";
import { RecipeInMealWhereUniqueInput } from "../../../inputs/RecipeInMealWhereUniqueInput";
import { RecipeInMealScalarFieldEnum } from "../../../../enums/RecipeInMealScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstRecipeInMealOrThrowArgs {
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

  @TypeGraphQL.Field(_type => [RecipeInMealScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "recipeId" | "mealId" | "quantity" | "unitId"> | undefined;
}
