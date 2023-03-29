import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeWhereInput } from "../inputs/FoodInRecipeWhereInput";

@TypeGraphQL.InputType("FoodInRecipeListRelationFilter", {
  isAbstract: true
})
export class FoodInRecipeListRelationFilter {
  @TypeGraphQL.Field(_type => FoodInRecipeWhereInput, {
    nullable: true
  })
  every?: FoodInRecipeWhereInput | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeWhereInput, {
    nullable: true
  })
  some?: FoodInRecipeWhereInput | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeWhereInput, {
    nullable: true
  })
  none?: FoodInRecipeWhereInput | undefined;
}
