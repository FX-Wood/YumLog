import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeCreateOrConnectWithoutMealsInput } from "../inputs/RecipeCreateOrConnectWithoutMealsInput";
import { RecipeCreateWithoutMealsInput } from "../inputs/RecipeCreateWithoutMealsInput";
import { RecipeWhereUniqueInput } from "../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.InputType("RecipeCreateNestedOneWithoutMealsInput", {
  isAbstract: true
})
export class RecipeCreateNestedOneWithoutMealsInput {
  @TypeGraphQL.Field(_type => RecipeCreateWithoutMealsInput, {
    nullable: true
  })
  create?: RecipeCreateWithoutMealsInput | undefined;

  @TypeGraphQL.Field(_type => RecipeCreateOrConnectWithoutMealsInput, {
    nullable: true
  })
  connectOrCreate?: RecipeCreateOrConnectWithoutMealsInput | undefined;

  @TypeGraphQL.Field(_type => RecipeWhereUniqueInput, {
    nullable: true
  })
  connect?: RecipeWhereUniqueInput | undefined;
}
