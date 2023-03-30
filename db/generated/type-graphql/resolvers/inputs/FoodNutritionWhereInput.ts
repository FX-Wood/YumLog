import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { FoodRelationFilter } from "../inputs/FoodRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { UnitRelationFilter } from "../inputs/UnitRelationFilter";

@TypeGraphQL.InputType("FoodNutritionWhereInput", {
  isAbstract: true
})
export class FoodNutritionWhereInput {
  @TypeGraphQL.Field(_type => [FoodNutritionWhereInput], {
    nullable: true
  })
  AND?: FoodNutritionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionWhereInput], {
    nullable: true
  })
  OR?: FoodNutritionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodNutritionWhereInput], {
    nullable: true
  })
  NOT?: FoodNutritionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FoodRelationFilter, {
    nullable: true
  })
  food?: FoodRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  foodId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  quantity?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => UnitRelationFilter, {
    nullable: true
  })
  unit?: UnitRelationFilter | undefined;

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
