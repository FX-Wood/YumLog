import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealCreateWithoutUnitInput } from "../inputs/FoodInMealCreateWithoutUnitInput";
import { FoodInMealWhereUniqueInput } from "../inputs/FoodInMealWhereUniqueInput";

@TypeGraphQL.InputType("FoodInMealCreateOrConnectWithoutUnitInput", {
  isAbstract: true
})
export class FoodInMealCreateOrConnectWithoutUnitInput {
  @TypeGraphQL.Field(_type => FoodInMealWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInMealWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodInMealCreateWithoutUnitInput, {
    nullable: false
  })
  create!: FoodInMealCreateWithoutUnitInput;
}
