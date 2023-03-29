import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeCreateOrConnectWithoutFoodsInput } from "../inputs/RecipeCreateOrConnectWithoutFoodsInput";
import { RecipeCreateWithoutFoodsInput } from "../inputs/RecipeCreateWithoutFoodsInput";
import { RecipeWhereUniqueInput } from "../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.InputType("RecipeCreateNestedOneWithoutFoodsInput", {
  isAbstract: true
})
export class RecipeCreateNestedOneWithoutFoodsInput {
  @TypeGraphQL.Field(_type => RecipeCreateWithoutFoodsInput, {
    nullable: true
  })
  create?: RecipeCreateWithoutFoodsInput | undefined;

  @TypeGraphQL.Field(_type => RecipeCreateOrConnectWithoutFoodsInput, {
    nullable: true
  })
  connectOrCreate?: RecipeCreateOrConnectWithoutFoodsInput | undefined;

  @TypeGraphQL.Field(_type => RecipeWhereUniqueInput, {
    nullable: true
  })
  connect?: RecipeWhereUniqueInput | undefined;
}
