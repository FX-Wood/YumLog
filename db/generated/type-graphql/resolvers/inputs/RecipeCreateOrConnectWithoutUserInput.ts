import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeCreateWithoutUserInput } from "../inputs/RecipeCreateWithoutUserInput";
import { RecipeWhereUniqueInput } from "../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.InputType("RecipeCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class RecipeCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => RecipeWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeWhereUniqueInput;

  @TypeGraphQL.Field(_type => RecipeCreateWithoutUserInput, {
    nullable: false
  })
  create!: RecipeCreateWithoutUserInput;
}
