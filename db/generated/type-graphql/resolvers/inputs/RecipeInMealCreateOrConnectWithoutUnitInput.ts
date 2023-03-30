import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealCreateWithoutUnitInput } from "../inputs/RecipeInMealCreateWithoutUnitInput";
import { RecipeInMealWhereUniqueInput } from "../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.InputType("RecipeInMealCreateOrConnectWithoutUnitInput", {
  isAbstract: true
})
export class RecipeInMealCreateOrConnectWithoutUnitInput {
  @TypeGraphQL.Field(_type => RecipeInMealWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeInMealWhereUniqueInput;

  @TypeGraphQL.Field(_type => RecipeInMealCreateWithoutUnitInput, {
    nullable: false
  })
  create!: RecipeInMealCreateWithoutUnitInput;
}
