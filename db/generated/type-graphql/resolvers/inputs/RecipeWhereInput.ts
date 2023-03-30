import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeListRelationFilter } from "../inputs/FoodInRecipeListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { RecipeInMealListRelationFilter } from "../inputs/RecipeInMealListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("RecipeWhereInput", {
  isAbstract: true
})
export class RecipeWhereInput {
  @TypeGraphQL.Field(_type => [RecipeWhereInput], {
    nullable: true
  })
  AND?: RecipeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeWhereInput], {
    nullable: true
  })
  OR?: RecipeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeWhereInput], {
    nullable: true
  })
  NOT?: RecipeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeListRelationFilter, {
    nullable: true
  })
  foods?: FoodInRecipeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealListRelationFilter, {
    nullable: true
  })
  meals?: RecipeInMealListRelationFilter | undefined;
}
