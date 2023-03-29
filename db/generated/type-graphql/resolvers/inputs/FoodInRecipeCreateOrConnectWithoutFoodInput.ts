import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateWithoutFoodInput } from "../inputs/FoodInRecipeCreateWithoutFoodInput";
import { FoodInRecipeWhereUniqueInput } from "../inputs/FoodInRecipeWhereUniqueInput";

@TypeGraphQL.InputType("FoodInRecipeCreateOrConnectWithoutFoodInput", {
  isAbstract: true
})
export class FoodInRecipeCreateOrConnectWithoutFoodInput {
  @TypeGraphQL.Field(_type => FoodInRecipeWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInRecipeWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateWithoutFoodInput, {
    nullable: false
  })
  create!: FoodInRecipeCreateWithoutFoodInput;
}
