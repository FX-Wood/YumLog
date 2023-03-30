import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealCreateWithoutMealInput } from "../inputs/RecipeInMealCreateWithoutMealInput";
import { RecipeInMealWhereUniqueInput } from "../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.InputType("RecipeInMealCreateOrConnectWithoutMealInput", {
  isAbstract: true
})
export class RecipeInMealCreateOrConnectWithoutMealInput {
  @TypeGraphQL.Field(_type => RecipeInMealWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeInMealWhereUniqueInput;

  @TypeGraphQL.Field(_type => RecipeInMealCreateWithoutMealInput, {
    nullable: false
  })
  create!: RecipeInMealCreateWithoutMealInput;
}
