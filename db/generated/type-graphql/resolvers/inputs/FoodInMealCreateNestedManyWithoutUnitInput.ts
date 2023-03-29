import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateManyUnitInputEnvelope } from "../inputs/FoodInMealCreateManyUnitInputEnvelope";
import { FoodInMealCreateOrConnectWithoutUnitInput } from "../inputs/FoodInMealCreateOrConnectWithoutUnitInput";
import { FoodInMealCreateWithoutUnitInput } from "../inputs/FoodInMealCreateWithoutUnitInput";
import { FoodInMealWhereUniqueInput } from "../inputs/FoodInMealWhereUniqueInput";

@TypeGraphQL.InputType("FoodInMealCreateNestedManyWithoutUnitInput", {
  isAbstract: true
})
export class FoodInMealCreateNestedManyWithoutUnitInput {
  @TypeGraphQL.Field(_type => [FoodInMealCreateWithoutUnitInput], {
    nullable: true
  })
  create?: FoodInMealCreateWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealCreateOrConnectWithoutUnitInput], {
    nullable: true
  })
  connectOrCreate?: FoodInMealCreateOrConnectWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodInMealCreateManyUnitInputEnvelope, {
    nullable: true
  })
  createMany?: FoodInMealCreateManyUnitInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FoodInMealWhereUniqueInput], {
    nullable: true
  })
  connect?: FoodInMealWhereUniqueInput[] | undefined;
}
