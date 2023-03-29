import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeCreateWithoutFoodsInput } from "../inputs/RecipeCreateWithoutFoodsInput";
import { RecipeWhereUniqueInput } from "../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.InputType("RecipeCreateOrConnectWithoutFoodsInput", {
  isAbstract: true
})
export class RecipeCreateOrConnectWithoutFoodsInput {
  @TypeGraphQL.Field(_type => RecipeWhereUniqueInput, {
    nullable: false
  })
  where!: RecipeWhereUniqueInput;

  @TypeGraphQL.Field(_type => RecipeCreateWithoutFoodsInput, {
    nullable: false
  })
  create!: RecipeCreateWithoutFoodsInput;
}
