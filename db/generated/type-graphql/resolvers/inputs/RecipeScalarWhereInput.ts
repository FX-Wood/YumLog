import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("RecipeScalarWhereInput", {
  isAbstract: true
})
export class RecipeScalarWhereInput {
  @TypeGraphQL.Field(_type => [RecipeScalarWhereInput], {
    nullable: true
  })
  AND?: RecipeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeScalarWhereInput], {
    nullable: true
  })
  OR?: RecipeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeScalarWhereInput], {
    nullable: true
  })
  NOT?: RecipeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;
}
