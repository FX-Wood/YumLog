import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeCreateManyUserInput } from "../inputs/RecipeCreateManyUserInput";

@TypeGraphQL.InputType("RecipeCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class RecipeCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [RecipeCreateManyUserInput], {
    nullable: false
  })
  data!: RecipeCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
