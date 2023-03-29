import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeScalarWhereInput } from "../inputs/FoodInRecipeScalarWhereInput";
import { FoodInRecipeUpdateManyMutationInput } from "../inputs/FoodInRecipeUpdateManyMutationInput";

@TypeGraphQL.InputType("FoodInRecipeUpdateManyWithWhereWithoutUnitInput", {
  isAbstract: true
})
export class FoodInRecipeUpdateManyWithWhereWithoutUnitInput {
  @TypeGraphQL.Field(_type => FoodInRecipeScalarWhereInput, {
    nullable: false
  })
  where!: FoodInRecipeScalarWhereInput;

  @TypeGraphQL.Field(_type => FoodInRecipeUpdateManyMutationInput, {
    nullable: false
  })
  data!: FoodInRecipeUpdateManyMutationInput;
}
