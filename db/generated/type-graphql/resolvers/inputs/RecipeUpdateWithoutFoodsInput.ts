import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealUpdateManyWithoutRecipeNestedInput } from "../inputs/RecipeInMealUpdateManyWithoutRecipeNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutRecipesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutRecipesNestedInput";

@TypeGraphQL.InputType("RecipeUpdateWithoutFoodsInput", {
  isAbstract: true
})
export class RecipeUpdateWithoutFoodsInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutRecipesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutRecipesNestedInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealUpdateManyWithoutRecipeNestedInput, {
    nullable: true
  })
  meals?: RecipeInMealUpdateManyWithoutRecipeNestedInput | undefined;
}
