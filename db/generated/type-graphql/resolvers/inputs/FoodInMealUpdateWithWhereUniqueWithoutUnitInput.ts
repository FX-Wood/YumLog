import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealUpdateWithoutUnitInput } from "../inputs/FoodInMealUpdateWithoutUnitInput";
import { FoodInMealWhereUniqueInput } from "../inputs/FoodInMealWhereUniqueInput";

@TypeGraphQL.InputType("FoodInMealUpdateWithWhereUniqueWithoutUnitInput", {
  isAbstract: true
})
export class FoodInMealUpdateWithWhereUniqueWithoutUnitInput {
  @TypeGraphQL.Field(_type => FoodInMealWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInMealWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodInMealUpdateWithoutUnitInput, {
    nullable: false
  })
  data!: FoodInMealUpdateWithoutUnitInput;
}
