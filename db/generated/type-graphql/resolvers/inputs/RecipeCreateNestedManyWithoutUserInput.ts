import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeCreateManyUserInputEnvelope } from "../inputs/RecipeCreateManyUserInputEnvelope";
import { RecipeCreateOrConnectWithoutUserInput } from "../inputs/RecipeCreateOrConnectWithoutUserInput";
import { RecipeCreateWithoutUserInput } from "../inputs/RecipeCreateWithoutUserInput";
import { RecipeWhereUniqueInput } from "../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.InputType("RecipeCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class RecipeCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [RecipeCreateWithoutUserInput], {
    nullable: true
  })
  create?: RecipeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: RecipeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => RecipeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: RecipeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RecipeWhereUniqueInput], {
    nullable: true
  })
  connect?: RecipeWhereUniqueInput[] | undefined;
}
