import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateManyUnitInputEnvelope } from "../inputs/FoodInRecipeCreateManyUnitInputEnvelope";
import { FoodInRecipeCreateOrConnectWithoutUnitInput } from "../inputs/FoodInRecipeCreateOrConnectWithoutUnitInput";
import { FoodInRecipeCreateWithoutUnitInput } from "../inputs/FoodInRecipeCreateWithoutUnitInput";
import { FoodInRecipeWhereUniqueInput } from "../inputs/FoodInRecipeWhereUniqueInput";

@TypeGraphQL.InputType("FoodInRecipeCreateNestedManyWithoutUnitInput", {
  isAbstract: true
})
export class FoodInRecipeCreateNestedManyWithoutUnitInput {
  @TypeGraphQL.Field(_type => [FoodInRecipeCreateWithoutUnitInput], {
    nullable: true
  })
  create?: FoodInRecipeCreateWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeCreateOrConnectWithoutUnitInput], {
    nullable: true
  })
  connectOrCreate?: FoodInRecipeCreateOrConnectWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateManyUnitInputEnvelope, {
    nullable: true
  })
  createMany?: FoodInRecipeCreateManyUnitInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeWhereUniqueInput], {
    nullable: true
  })
  connect?: FoodInRecipeWhereUniqueInput[] | undefined;
}
