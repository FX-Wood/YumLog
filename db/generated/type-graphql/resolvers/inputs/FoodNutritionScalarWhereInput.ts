import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("FoodNutritionScalarWhereInput", {
  isAbstract: true
})
export class FoodNutritionScalarWhereInput {
  @TypeGraphQL.Field(_type => [FoodNutritionScalarWhereInput], {
    nullable: true
  })
  AND?: FoodNutritionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionScalarWhereInput], {
    nullable: true
  })
  OR?: FoodNutritionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionScalarWhereInput], {
    nullable: true
  })
  NOT?: FoodNutritionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  foodId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  quantity?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  unitId?: IntFilter | undefined;

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
}
