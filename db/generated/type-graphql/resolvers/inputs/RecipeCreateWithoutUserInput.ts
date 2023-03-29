import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateNestedManyWithoutRecipeInput } from "../inputs/FoodInRecipeCreateNestedManyWithoutRecipeInput";

@TypeGraphQL.InputType("RecipeCreateWithoutUserInput", {
  isAbstract: true
})
export class RecipeCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateNestedManyWithoutRecipeInput, {
    nullable: true
  })
  foods?: FoodInRecipeCreateNestedManyWithoutRecipeInput | undefined;
}
