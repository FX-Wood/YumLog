import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodCreateWithoutNutritionInput } from "../inputs/FoodCreateWithoutNutritionInput";
import { FoodWhereUniqueInput } from "../inputs/FoodWhereUniqueInput";

@TypeGraphQL.InputType("FoodCreateOrConnectWithoutNutritionInput", {
  isAbstract: true
})
export class FoodCreateOrConnectWithoutNutritionInput {
  @TypeGraphQL.Field(_type => FoodWhereUniqueInput, {
    nullable: false
  })
  where!: FoodWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodCreateWithoutNutritionInput, {
    nullable: false
  })
  create!: FoodCreateWithoutNutritionInput;
}
