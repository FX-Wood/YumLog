import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodCreateWithoutRecipesInput } from "../inputs/FoodCreateWithoutRecipesInput";
import { FoodWhereUniqueInput } from "../inputs/FoodWhereUniqueInput";

@TypeGraphQL.InputType("FoodCreateOrConnectWithoutRecipesInput", {
  isAbstract: true
})
export class FoodCreateOrConnectWithoutRecipesInput {
  @TypeGraphQL.Field(_type => FoodWhereUniqueInput, {
    nullable: false
  })
  where!: FoodWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodCreateWithoutRecipesInput, {
    nullable: false
  })
  create!: FoodCreateWithoutRecipesInput;
}
