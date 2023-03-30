import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumMealTypeFilter } from "../inputs/EnumMealTypeFilter";
import { FoodInMealListRelationFilter } from "../inputs/FoodInMealListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { RecipeInMealListRelationFilter } from "../inputs/RecipeInMealListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("MealWhereInput", {
  isAbstract: true
})
export class MealWhereInput {
  @TypeGraphQL.Field(_type => [MealWhereInput], {
    nullable: true
  })
  AND?: MealWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MealWhereInput], {
    nullable: true
  })
  OR?: MealWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MealWhereInput], {
    nullable: true
  })
  NOT?: MealWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumMealTypeFilter, {
    nullable: true
  })
  mealType?: EnumMealTypeFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FoodInMealListRelationFilter, {
    nullable: true
  })
  foods?: FoodInMealListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealListRelationFilter, {
    nullable: true
  })
  recipes?: RecipeInMealListRelationFilter | undefined;
}
