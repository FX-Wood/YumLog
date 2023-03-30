import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateNestedManyWithoutRecipeInput } from "../inputs/FoodInRecipeCreateNestedManyWithoutRecipeInput";
import { UserCreateNestedOneWithoutRecipesInput } from "../inputs/UserCreateNestedOneWithoutRecipesInput";

@TypeGraphQL.InputType("RecipeCreateWithoutMealsInput", {
  isAbstract: true
})
export class RecipeCreateWithoutMealsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutRecipesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutRecipesInput;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateNestedManyWithoutRecipeInput, {
    nullable: true
  })
  foods?: FoodInRecipeCreateNestedManyWithoutRecipeInput | undefined;
}
