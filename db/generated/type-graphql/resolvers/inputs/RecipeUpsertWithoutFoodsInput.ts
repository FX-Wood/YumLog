import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeCreateWithoutFoodsInput } from "../inputs/RecipeCreateWithoutFoodsInput";
import { RecipeUpdateWithoutFoodsInput } from "../inputs/RecipeUpdateWithoutFoodsInput";

@TypeGraphQL.InputType("RecipeUpsertWithoutFoodsInput", {
  isAbstract: true
})
export class RecipeUpsertWithoutFoodsInput {
  @TypeGraphQL.Field(_type => RecipeUpdateWithoutFoodsInput, {
    nullable: false
  })
  update!: RecipeUpdateWithoutFoodsInput;

  @TypeGraphQL.Field(_type => RecipeCreateWithoutFoodsInput, {
    nullable: false
  })
  create!: RecipeCreateWithoutFoodsInput;
}
