import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateWithoutFoodInput } from "../inputs/FoodInRecipeCreateWithoutFoodInput";
import { FoodInRecipeUpdateWithoutFoodInput } from "../inputs/FoodInRecipeUpdateWithoutFoodInput";
import { FoodInRecipeWhereUniqueInput } from "../inputs/FoodInRecipeWhereUniqueInput";

@TypeGraphQL.InputType("FoodInRecipeUpsertWithWhereUniqueWithoutFoodInput", {
  isAbstract: true
})
export class FoodInRecipeUpsertWithWhereUniqueWithoutFoodInput {
  @TypeGraphQL.Field(_type => FoodInRecipeWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInRecipeWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodInRecipeUpdateWithoutFoodInput, {
    nullable: false
  })
  update!: FoodInRecipeUpdateWithoutFoodInput;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateWithoutFoodInput, {
    nullable: false
  })
  create!: FoodInRecipeCreateWithoutFoodInput;
}
