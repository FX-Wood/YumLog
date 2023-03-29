import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodCreateOrConnectWithoutMealsInput } from "../inputs/FoodCreateOrConnectWithoutMealsInput";
import { FoodCreateWithoutMealsInput } from "../inputs/FoodCreateWithoutMealsInput";
import { FoodUpdateWithoutMealsInput } from "../inputs/FoodUpdateWithoutMealsInput";
import { FoodUpsertWithoutMealsInput } from "../inputs/FoodUpsertWithoutMealsInput";
import { FoodWhereUniqueInput } from "../inputs/FoodWhereUniqueInput";

@TypeGraphQL.InputType("FoodUpdateOneRequiredWithoutMealsNestedInput", {
  isAbstract: true
})
export class FoodUpdateOneRequiredWithoutMealsNestedInput {
  @TypeGraphQL.Field(_type => FoodCreateWithoutMealsInput, {
    nullable: true
  })
  create?: FoodCreateWithoutMealsInput | undefined;

  @TypeGraphQL.Field(_type => FoodCreateOrConnectWithoutMealsInput, {
    nullable: true
  })
  connectOrCreate?: FoodCreateOrConnectWithoutMealsInput | undefined;

  @TypeGraphQL.Field(_type => FoodUpsertWithoutMealsInput, {
    nullable: true
  })
  upsert?: FoodUpsertWithoutMealsInput | undefined;

  @TypeGraphQL.Field(_type => FoodWhereUniqueInput, {
    nullable: true
  })
  connect?: FoodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FoodUpdateWithoutMealsInput, {
    nullable: true
  })
  update?: FoodUpdateWithoutMealsInput | undefined;
}
