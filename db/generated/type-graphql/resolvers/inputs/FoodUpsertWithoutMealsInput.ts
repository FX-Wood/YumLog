import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodCreateWithoutMealsInput } from "../inputs/FoodCreateWithoutMealsInput";
import { FoodUpdateWithoutMealsInput } from "../inputs/FoodUpdateWithoutMealsInput";

@TypeGraphQL.InputType("FoodUpsertWithoutMealsInput", {
  isAbstract: true
})
export class FoodUpsertWithoutMealsInput {
  @TypeGraphQL.Field(_type => FoodUpdateWithoutMealsInput, {
    nullable: false
  })
  update!: FoodUpdateWithoutMealsInput;

  @TypeGraphQL.Field(_type => FoodCreateWithoutMealsInput, {
    nullable: false
  })
  create!: FoodCreateWithoutMealsInput;
}
