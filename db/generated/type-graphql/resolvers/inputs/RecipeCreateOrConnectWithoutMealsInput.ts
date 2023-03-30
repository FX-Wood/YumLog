import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeCreateWithoutMealsInput } from "../inputs/RecipeCreateWithoutMealsInput";
import { RecipeWhereUniqueInput } from "../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.InputType("RecipeCreateOrConnectWithoutMealsInput", {
  isAbstract: true
})
export class RecipeCreateOrConnectWithoutMealsInput {
  @TypeGraphQL.Field(_type => RecipeWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeWhereUniqueInput;

  @TypeGraphQL.Field(_type => RecipeCreateWithoutMealsInput, {
    nullable: false
  })
  create!: RecipeCreateWithoutMealsInput;
}
