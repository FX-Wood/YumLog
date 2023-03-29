import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumMealTypeFilter } from "../inputs/EnumMealTypeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("MealScalarWhereInput", {
  isAbstract: true
})
export class MealScalarWhereInput {
  @TypeGraphQL.Field(_type => [MealScalarWhereInput], {
    nullable: true
  })
  AND?: MealScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MealScalarWhereInput], {
    nullable: true
  })
  OR?: MealScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MealScalarWhereInput], {
    nullable: true
  })
  NOT?: MealScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumMealTypeFilter, {
    nullable: true
  })
  mealType?: EnumMealTypeFilter | undefined;
}
