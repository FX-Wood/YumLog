import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateWithoutUnitInput } from "../inputs/FoodInRecipeCreateWithoutUnitInput";
import { FoodInRecipeWhereUniqueInput } from "../inputs/FoodInRecipeWhereUniqueInput";

@TypeGraphQL.InputType("FoodInRecipeCreateOrConnectWithoutUnitInput", {
  isAbstract: true
})
export class FoodInRecipeCreateOrConnectWithoutUnitInput {
  @TypeGraphQL.Field(_type => FoodInRecipeWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInRecipeWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateWithoutUnitInput, {
    nullable: false
  })
  create!: FoodInRecipeCreateWithoutUnitInput;
}
