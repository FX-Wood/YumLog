import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealCreateWithoutUnitInput } from "../inputs/RecipeInMealCreateWithoutUnitInput";
import { RecipeInMealUpdateWithoutUnitInput } from "../inputs/RecipeInMealUpdateWithoutUnitInput";
import { RecipeInMealWhereUniqueInput } from "../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.InputType("RecipeInMealUpsertWithWhereUniqueWithoutUnitInput", {
  isAbstract: true
})
export class RecipeInMealUpsertWithWhereUniqueWithoutUnitInput {
  @TypeGraphQL.Field(_type => RecipeInMealWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeInMealWhereUniqueInput;

  @TypeGraphQL.Field(_type => RecipeInMealUpdateWithoutUnitInput, {
    nullable: false
  })
  update!: RecipeInMealUpdateWithoutUnitInput;

  @TypeGraphQL.Field(_type => RecipeInMealCreateWithoutUnitInput, {
    nullable: false
  })
  create!: RecipeInMealCreateWithoutUnitInput;
}
