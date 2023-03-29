import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateManyFoodInputEnvelope } from "../inputs/FoodInMealCreateManyFoodInputEnvelope";
import { FoodInMealCreateOrConnectWithoutFoodInput } from "../inputs/FoodInMealCreateOrConnectWithoutFoodInput";
import { FoodInMealCreateWithoutFoodInput } from "../inputs/FoodInMealCreateWithoutFoodInput";
import { FoodInMealWhereUniqueInput } from "../inputs/FoodInMealWhereUniqueInput";

@TypeGraphQL.InputType("FoodInMealCreateNestedManyWithoutFoodInput", {
  isAbstract: true
})
export class FoodInMealCreateNestedManyWithoutFoodInput {
  @TypeGraphQL.Field(_type => [FoodInMealCreateWithoutFoodInput], {
    nullable: true
  })
  create?: FoodInMealCreateWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealCreateOrConnectWithoutFoodInput], {
    nullable: true
  })
  connectOrCreate?: FoodInMealCreateOrConnectWithoutFoodInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodInMealCreateManyFoodInputEnvelope, {
    nullable: true
  })
  createMany?: FoodInMealCreateManyFoodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealWhereUniqueInput], {
    nullable: true
  })
  connect?: FoodInMealWhereUniqueInput[] | undefined;
}
