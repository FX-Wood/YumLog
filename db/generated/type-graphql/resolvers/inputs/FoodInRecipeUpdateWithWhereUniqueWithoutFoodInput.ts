import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeUpdateWithoutFoodInput } from "../inputs/FoodInRecipeUpdateWithoutFoodInput";
import { FoodInRecipeWhereUniqueInput } from "../inputs/FoodInRecipeWhereUniqueInput";

@TypeGraphQL.InputType("FoodInRecipeUpdateWithWhereUniqueWithoutFoodInput", {
  isAbstract: true
})
export class FoodInRecipeUpdateWithWhereUniqueWithoutFoodInput {
  @TypeGraphQL.Field(_type => FoodInRecipeWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInRecipeWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodInRecipeUpdateWithoutFoodInput, {
    nullable: false
  })
  data!: FoodInRecipeUpdateWithoutFoodInput;
}
