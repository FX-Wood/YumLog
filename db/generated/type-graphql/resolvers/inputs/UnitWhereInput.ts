import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealListRelationFilter } from "../inputs/FoodInMealListRelationFilter";
import { FoodInRecipeListRelationFilter } from "../inputs/FoodInRecipeListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("UnitWhereInput", {
  isAbstract: true
})
export class UnitWhereInput {
  @TypeGraphQL.Field(_type => [UnitWhereInput], {
    nullable: true
  })
  AND?: UnitWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitWhereInput], {
    nullable: true
  })
  OR?: UnitWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitWhereInput], {
    nullable: true
  })
  NOT?: UnitWhereInput[] | undefined;

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
  abbreviation?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FoodInMealListRelationFilter, {
    nullable: true
  })
  mealFoods?: FoodInMealListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeListRelationFilter, {
    nullable: true
  })
  recipeFoods?: FoodInRecipeListRelationFilter | undefined;
}
