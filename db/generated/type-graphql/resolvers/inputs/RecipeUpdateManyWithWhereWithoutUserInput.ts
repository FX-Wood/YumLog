import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeScalarWhereInput } from "../inputs/RecipeScalarWhereInput";
import { RecipeUpdateManyMutationInput } from "../inputs/RecipeUpdateManyMutationInput";

@TypeGraphQL.InputType("RecipeUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class RecipeUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => RecipeScalarWhereInput, {
    nullable: false
  })
  where!: RecipeScalarWhereInput;

  @TypeGraphQL.Field(_type => RecipeUpdateManyMutationInput, {
    nullable: false
  })
  data!: RecipeUpdateManyMutationInput;
}
