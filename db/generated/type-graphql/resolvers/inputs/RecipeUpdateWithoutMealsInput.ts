import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeUpdateManyWithoutRecipeNestedInput } from "../inputs/FoodInRecipeUpdateManyWithoutRecipeNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutRecipesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutRecipesNestedInput";

@TypeGraphQL.InputType("RecipeUpdateWithoutMealsInput", {
  isAbstract: true
})
export class RecipeUpdateWithoutMealsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutRecipesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutRecipesNestedInput | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeUpdateManyWithoutRecipeNestedInput, {
    nullable: true
  })
  foods?: FoodInRecipeUpdateManyWithoutRecipeNestedInput | undefined;
}
