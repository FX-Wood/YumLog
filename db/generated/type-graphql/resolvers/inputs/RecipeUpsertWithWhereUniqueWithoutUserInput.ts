import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeCreateWithoutUserInput } from "../inputs/RecipeCreateWithoutUserInput";
import { RecipeUpdateWithoutUserInput } from "../inputs/RecipeUpdateWithoutUserInput";
import { RecipeWhereUniqueInput } from "../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.InputType("RecipeUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class RecipeUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => RecipeWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeWhereUniqueInput;

  @TypeGraphQL.Field(_type => RecipeUpdateWithoutUserInput, {
    nullable: false
  })
  update!: RecipeUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => RecipeCreateWithoutUserInput, {
    nullable: false
  })
  create!: RecipeCreateWithoutUserInput;
}
