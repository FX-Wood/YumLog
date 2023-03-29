import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeWhereInput } from "../inputs/RecipeWhereInput";

@TypeGraphQL.InputType("RecipeListRelationFilter", {
  isAbstract: true
})
export class RecipeListRelationFilter {
  @TypeGraphQL.Field(_type => RecipeWhereInput, {
    nullable: true
  })
  every?: RecipeWhereInput | undefined;

  @TypeGraphQL.Field(_type => RecipeWhereInput, {
    nullable: true
  })
  some?: RecipeWhereInput | undefined;

  @TypeGraphQL.Field(_type => RecipeWhereInput, {
    nullable: true
  })
  none?: RecipeWhereInput | undefined;
}
