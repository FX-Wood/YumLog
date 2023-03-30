import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealWhereInput } from "../inputs/RecipeInMealWhereInput";

@TypeGraphQL.InputType("RecipeInMealListRelationFilter", {
  isAbstract: true
})
export class RecipeInMealListRelationFilter {
  @TypeGraphQL.Field(_type => RecipeInMealWhereInput, {
    nullable: true
  })
  every?: RecipeInMealWhereInput | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealWhereInput, {
    nullable: true
  })
  some?: RecipeInMealWhereInput | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealWhereInput, {
    nullable: true
  })
  none?: RecipeInMealWhereInput | undefined;
}
