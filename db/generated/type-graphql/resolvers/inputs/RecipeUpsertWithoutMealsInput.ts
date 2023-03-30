import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeCreateWithoutMealsInput } from "../inputs/RecipeCreateWithoutMealsInput";
import { RecipeUpdateWithoutMealsInput } from "../inputs/RecipeUpdateWithoutMealsInput";

@TypeGraphQL.InputType("RecipeUpsertWithoutMealsInput", {
  isAbstract: true
})
export class RecipeUpsertWithoutMealsInput {
  @TypeGraphQL.Field(_type => RecipeUpdateWithoutMealsInput, {
    nullable: false
  })
  update!: RecipeUpdateWithoutMealsInput;

  @TypeGraphQL.Field(_type => RecipeCreateWithoutMealsInput, {
    nullable: false
  })
  create!: RecipeCreateWithoutMealsInput;
}
