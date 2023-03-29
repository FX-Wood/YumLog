import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodCreateWithoutRecipesInput } from "../inputs/FoodCreateWithoutRecipesInput";
import { FoodUpdateWithoutRecipesInput } from "../inputs/FoodUpdateWithoutRecipesInput";

@TypeGraphQL.InputType("FoodUpsertWithoutRecipesInput", {
  isAbstract: true
})
export class FoodUpsertWithoutRecipesInput {
  @TypeGraphQL.Field(_type => FoodUpdateWithoutRecipesInput, {
    nullable: false
  })
  update!: FoodUpdateWithoutRecipesInput;

  @TypeGraphQL.Field(_type => FoodCreateWithoutRecipesInput, {
    nullable: false
  })
  create!: FoodCreateWithoutRecipesInput;
}
