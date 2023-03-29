import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("FoodInRecipeScalarWhereInput", {
  isAbstract: true
})
export class FoodInRecipeScalarWhereInput {
  @TypeGraphQL.Field(_type => [FoodInRecipeScalarWhereInput], {
    nullable: true
  })
  AND?: FoodInRecipeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeScalarWhereInput], {
    nullable: true
  })
  OR?: FoodInRecipeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeScalarWhereInput], {
    nullable: true
  })
  NOT?: FoodInRecipeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  foodId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  recipeId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  quantity?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  unitId?: IntFilter | undefined;
}
