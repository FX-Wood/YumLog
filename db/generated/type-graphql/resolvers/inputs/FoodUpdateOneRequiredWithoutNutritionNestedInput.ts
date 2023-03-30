import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodCreateOrConnectWithoutNutritionInput } from "../inputs/FoodCreateOrConnectWithoutNutritionInput";
import { FoodCreateWithoutNutritionInput } from "../inputs/FoodCreateWithoutNutritionInput";
import { FoodUpdateWithoutNutritionInput } from "../inputs/FoodUpdateWithoutNutritionInput";
import { FoodUpsertWithoutNutritionInput } from "../inputs/FoodUpsertWithoutNutritionInput";
import { FoodWhereUniqueInput } from "../inputs/FoodWhereUniqueInput";

@TypeGraphQL.InputType("FoodUpdateOneRequiredWithoutNutritionNestedInput", {
  isAbstract: true
})
export class FoodUpdateOneRequiredWithoutNutritionNestedInput {
  @TypeGraphQL.Field(_type => FoodCreateWithoutNutritionInput, {
    nullable: true
  })
  create?: FoodCreateWithoutNutritionInput | undefined;

  @TypeGraphQL.Field(_type => FoodCreateOrConnectWithoutNutritionInput, {
    nullable: true
  })
  connectOrCreate?: FoodCreateOrConnectWithoutNutritionInput | undefined;

  @TypeGraphQL.Field(_type => FoodUpsertWithoutNutritionInput, {
    nullable: true
  })
  upsert?: FoodUpsertWithoutNutritionInput | undefined;

  @TypeGraphQL.Field(_type => FoodWhereUniqueInput, {
    nullable: true
  })
  connect?: FoodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FoodUpdateWithoutNutritionInput, {
    nullable: true
  })
  update?: FoodUpdateWithoutNutritionInput | undefined;
}
