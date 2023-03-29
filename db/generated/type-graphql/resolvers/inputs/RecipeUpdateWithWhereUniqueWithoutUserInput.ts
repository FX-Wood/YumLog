import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeUpdateWithoutUserInput } from "../inputs/RecipeUpdateWithoutUserInput";
import { RecipeWhereUniqueInput } from "../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.InputType("RecipeUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class RecipeUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => RecipeWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeWhereUniqueInput;

  @TypeGraphQL.Field(_type => RecipeUpdateWithoutUserInput, {
    nullable: false
  })
  data!: RecipeUpdateWithoutUserInput;
}
