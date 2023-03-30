import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { FoodRelationFilter } from "../inputs/FoodRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MealRelationFilter } from "../inputs/MealRelationFilter";
import { UnitRelationFilter } from "../inputs/UnitRelationFilter";

@TypeGraphQL.InputType("FoodInMealWhereInput", {
  isAbstract: true
})
export class FoodInMealWhereInput {
  @TypeGraphQL.Field(_type => [FoodInMealWhereInput], {
    nullable: true
  })
  AND?: FoodInMealWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealWhereInput], {
    nullable: true
  })
  OR?: FoodInMealWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealWhereInput], {
    nullable: true
  })
  NOT?: FoodInMealWhereInput[] | undefined;

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
  mealId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  quantity?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  unitId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FoodRelationFilter, {
    nullable: true
  })
  food?: FoodRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MealRelationFilter, {
    nullable: true
  })
  meal?: MealRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UnitRelationFilter, {
    nullable: true
  })
  unit?: UnitRelationFilter | undefined;
}
