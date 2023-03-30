import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodCreateOrConnectWithoutNutritionInput } from "../inputs/FoodCreateOrConnectWithoutNutritionInput";
import { FoodCreateWithoutNutritionInput } from "../inputs/FoodCreateWithoutNutritionInput";
import { FoodWhereUniqueInput } from "../inputs/FoodWhereUniqueInput";

@TypeGraphQL.InputType("FoodCreateNestedOneWithoutNutritionInput", {
  isAbstract: true
})
export class FoodCreateNestedOneWithoutNutritionInput {
  @TypeGraphQL.Field(_type => FoodCreateWithoutNutritionInput, {
    nullable: true
  })
  create?: FoodCreateWithoutNutritionInput | undefined;

  @TypeGraphQL.Field(_type => FoodCreateOrConnectWithoutNutritionInput, {
    nullable: true
  })
  connectOrCreate?: FoodCreateOrConnectWithoutNutritionInput | undefined;

  @TypeGraphQL.Field(_type => FoodWhereUniqueInput, {
    nullable: true
  })
  connect?: FoodWhereUniqueInput | undefined;
}
