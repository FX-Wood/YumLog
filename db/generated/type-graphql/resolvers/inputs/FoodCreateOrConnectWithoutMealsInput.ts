import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodCreateWithoutMealsInput } from "../inputs/FoodCreateWithoutMealsInput";
import { FoodWhereUniqueInput } from "../inputs/FoodWhereUniqueInput";

@TypeGraphQL.InputType("FoodCreateOrConnectWithoutMealsInput", {
  isAbstract: true
})
export class FoodCreateOrConnectWithoutMealsInput {
  @TypeGraphQL.Field(_type => FoodWhereUniqueInput, {
    nullable: false
  })
  where!: FoodWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodCreateWithoutMealsInput, {
    nullable: false
  })
  create!: FoodCreateWithoutMealsInput;
}
