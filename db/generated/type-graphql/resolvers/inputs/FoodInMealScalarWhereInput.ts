import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("FoodInMealScalarWhereInput", {
  isAbstract: true
})
export class FoodInMealScalarWhereInput {
  @TypeGraphQL.Field(_type => [FoodInMealScalarWhereInput], {
    nullable: true
  })
  AND?: FoodInMealScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealScalarWhereInput], {
    nullable: true
  })
  OR?: FoodInMealScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealScalarWhereInput], {
    nullable: true
  })
  NOT?: FoodInMealScalarWhereInput[] | undefined;

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
}
