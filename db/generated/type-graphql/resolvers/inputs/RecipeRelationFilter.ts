import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeWhereInput } from "../inputs/RecipeWhereInput";

@TypeGraphQL.InputType("RecipeRelationFilter", {
  isAbstract: true
})
export class RecipeRelationFilter {
  @TypeGraphQL.Field(_type => RecipeWhereInput, {
    nullable: true
  })
  is?: RecipeWhereInput | undefined;

  @TypeGraphQL.Field(_type => RecipeWhereInput, {
    nullable: true
  })
  isNot?: RecipeWhereInput | undefined;
}
