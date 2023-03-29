import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodCreateOrConnectWithoutRecipesInput } from "../inputs/FoodCreateOrConnectWithoutRecipesInput";
import { FoodCreateWithoutRecipesInput } from "../inputs/FoodCreateWithoutRecipesInput";
import { FoodUpdateWithoutRecipesInput } from "../inputs/FoodUpdateWithoutRecipesInput";
import { FoodUpsertWithoutRecipesInput } from "../inputs/FoodUpsertWithoutRecipesInput";
import { FoodWhereUniqueInput } from "../inputs/FoodWhereUniqueInput";

@TypeGraphQL.InputType("FoodUpdateOneRequiredWithoutRecipesNestedInput", {
  isAbstract: true
})
export class FoodUpdateOneRequiredWithoutRecipesNestedInput {
  @TypeGraphQL.Field(_type => FoodCreateWithoutRecipesInput, {
    nullable: true
  })
  create?: FoodCreateWithoutRecipesInput | undefined;

  @TypeGraphQL.Field(_type => FoodCreateOrConnectWithoutRecipesInput, {
    nullable: true
  })
  connectOrCreate?: FoodCreateOrConnectWithoutRecipesInput | undefined;

  @TypeGraphQL.Field(_type => FoodUpsertWithoutRecipesInput, {
    nullable: true
  })
  upsert?: FoodUpsertWithoutRecipesInput | undefined;

  @TypeGraphQL.Field(_type => FoodWhereUniqueInput, {
    nullable: true
  })
  connect?: FoodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FoodUpdateWithoutRecipesInput, {
    nullable: true
  })
  update?: FoodUpdateWithoutRecipesInput | undefined;
}
