import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateManyFoodInputEnvelope } from "../inputs/FoodInRecipeCreateManyFoodInputEnvelope";
import { FoodInRecipeCreateOrConnectWithoutFoodInput } from "../inputs/FoodInRecipeCreateOrConnectWithoutFoodInput";
import { FoodInRecipeCreateWithoutFoodInput } from "../inputs/FoodInRecipeCreateWithoutFoodInput";
import { FoodInRecipeWhereUniqueInput } from "../inputs/FoodInRecipeWhereUniqueInput";

@TypeGraphQL.InputType("FoodInRecipeCreateNestedManyWithoutFoodInput", {
  isAbstract: true
})
export class FoodInRecipeCreateNestedManyWithoutFoodInput {
  @TypeGraphQL.Field(_type => [FoodInRecipeCreateWithoutFoodInput], {
    nullable: true
  })
  create?: FoodInRecipeCreateWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeCreateOrConnectWithoutFoodInput], {
    nullable: true
  })
  connectOrCreate?: FoodInRecipeCreateOrConnectWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateManyFoodInputEnvelope, {
    nullable: true
  })
  createMany?: FoodInRecipeCreateManyFoodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeWhereUniqueInput], {
    nullable: true
  })
  connect?: FoodInRecipeWhereUniqueInput[] | undefined;
}
