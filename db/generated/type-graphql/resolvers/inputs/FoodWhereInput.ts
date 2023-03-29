import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { FoodInMealListRelationFilter } from "../inputs/FoodInMealListRelationFilter";
import { FoodInRecipeListRelationFilter } from "../inputs/FoodInRecipeListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("FoodWhereInput", {
  isAbstract: true
})
export class FoodWhereInput {
  @TypeGraphQL.Field(_type => [FoodWhereInput], {
    nullable: true
  })
  AND?: FoodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodWhereInput], {
    nullable: true
  })
  OR?: FoodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodWhereInput], {
    nullable: true
  })
  NOT?: FoodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  brand?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  calories?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  protein?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  fat?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  carbs?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => FoodInMealListRelationFilter, {
    nullable: true
  })
  meals?: FoodInMealListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeListRelationFilter, {
    nullable: true
  })
  recipes?: FoodInRecipeListRelationFilter | undefined;
}
