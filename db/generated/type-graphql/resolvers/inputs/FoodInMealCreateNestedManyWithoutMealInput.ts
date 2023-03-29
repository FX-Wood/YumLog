import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateManyMealInputEnvelope } from "../inputs/FoodInMealCreateManyMealInputEnvelope";
import { FoodInMealCreateOrConnectWithoutMealInput } from "../inputs/FoodInMealCreateOrConnectWithoutMealInput";
import { FoodInMealCreateWithoutMealInput } from "../inputs/FoodInMealCreateWithoutMealInput";
import { FoodInMealWhereUniqueInput } from "../inputs/FoodInMealWhereUniqueInput";

@TypeGraphQL.InputType("FoodInMealCreateNestedManyWithoutMealInput", {
  isAbstract: true
})
export class FoodInMealCreateNestedManyWithoutMealInput {
  @TypeGraphQL.Field(_type => [FoodInMealCreateWithoutMealInput], {
    nullable: true
  })
  create?: FoodInMealCreateWithoutMealInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealCreateOrConnectWithoutMealInput], {
    nullable: true
  })
  connectOrCreate?: FoodInMealCreateOrConnectWithoutMealInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodInMealCreateManyMealInputEnvelope, {
    nullable: true
  })
  createMany?: FoodInMealCreateManyMealInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealWhereUniqueInput], {
    nullable: true
  })
  connect?: FoodInMealWhereUniqueInput[] | undefined;
}
