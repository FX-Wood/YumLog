import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInMealScalarWhereInput } from "../inputs/FoodInMealScalarWhereInput";
import { FoodInMealUpdateManyMutationInput } from "../inputs/FoodInMealUpdateManyMutationInput";

@TypeGraphQL.InputType("FoodInMealUpdateManyWithWhereWithoutFoodInput", {
  isAbstract: true
})
export class FoodInMealUpdateManyWithWhereWithoutFoodInput {
  @TypeGraphQL.Field(_type => FoodInMealScalarWhereInput, {
    nullable: false
  })
  where!: FoodInMealScalarWhereInput;

  @TypeGraphQL.Field(_type => FoodInMealUpdateManyMutationInput, {
    nullable: false
  })
  data!: FoodInMealUpdateManyMutationInput;
}
