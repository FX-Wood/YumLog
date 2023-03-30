import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealCreateNestedManyWithoutRecipeInput } from "../inputs/RecipeInMealCreateNestedManyWithoutRecipeInput";
import { UserCreateNestedOneWithoutRecipesInput } from "../inputs/UserCreateNestedOneWithoutRecipesInput";

@TypeGraphQL.InputType("RecipeCreateWithoutFoodsInput", {
  isAbstract: true
})
export class RecipeCreateWithoutFoodsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutRecipesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutRecipesInput;

  @TypeGraphQL.Field(_type => RecipeInMealCreateNestedManyWithoutRecipeInput, {
    nullable: true
  })
  meals?: RecipeInMealCreateNestedManyWithoutRecipeInput | undefined;
}
