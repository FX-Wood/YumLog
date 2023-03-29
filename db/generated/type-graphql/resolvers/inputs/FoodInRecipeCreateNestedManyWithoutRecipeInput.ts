import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateManyRecipeInputEnvelope } from "../inputs/FoodInRecipeCreateManyRecipeInputEnvelope";
import { FoodInRecipeCreateOrConnectWithoutRecipeInput } from "../inputs/FoodInRecipeCreateOrConnectWithoutRecipeInput";
import { FoodInRecipeCreateWithoutRecipeInput } from "../inputs/FoodInRecipeCreateWithoutRecipeInput";
import { FoodInRecipeWhereUniqueInput } from "../inputs/FoodInRecipeWhereUniqueInput";

@TypeGraphQL.InputType("FoodInRecipeCreateNestedManyWithoutRecipeInput", {
  isAbstract: true
})
export class FoodInRecipeCreateNestedManyWithoutRecipeInput {
  @TypeGraphQL.Field(_type => [FoodInRecipeCreateWithoutRecipeInput], {
    nullable: true
  })
  create?: FoodInRecipeCreateWithoutRecipeInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeCreateOrConnectWithoutRecipeInput], {
    nullable: true
  })
  connectOrCreate?: FoodInRecipeCreateOrConnectWithoutRecipeInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateManyRecipeInputEnvelope, {
    nullable: true
  })
  createMany?: FoodInRecipeCreateManyRecipeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeWhereUniqueInput], {
    nullable: true
  })
  connect?: FoodInRecipeWhereUniqueInput[] | undefined;
}
