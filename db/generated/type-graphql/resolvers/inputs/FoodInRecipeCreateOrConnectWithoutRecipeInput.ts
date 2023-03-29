import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateWithoutRecipeInput } from "../inputs/FoodInRecipeCreateWithoutRecipeInput";
import { FoodInRecipeWhereUniqueInput } from "../inputs/FoodInRecipeWhereUniqueInput";

@TypeGraphQL.InputType("FoodInRecipeCreateOrConnectWithoutRecipeInput", {
  isAbstract: true
})
export class FoodInRecipeCreateOrConnectWithoutRecipeInput {
  @TypeGraphQL.Field(_type => FoodInRecipeWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInRecipeWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateWithoutRecipeInput, {
    nullable: false
  })
  create!: FoodInRecipeCreateWithoutRecipeInput;
}
