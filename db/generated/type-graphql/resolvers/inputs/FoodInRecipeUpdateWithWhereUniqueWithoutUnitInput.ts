import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeUpdateWithoutUnitInput } from "../inputs/FoodInRecipeUpdateWithoutUnitInput";
import { FoodInRecipeWhereUniqueInput } from "../inputs/FoodInRecipeWhereUniqueInput";

@TypeGraphQL.InputType("FoodInRecipeUpdateWithWhereUniqueWithoutUnitInput", {
  isAbstract: true
})
export class FoodInRecipeUpdateWithWhereUniqueWithoutUnitInput {
  @TypeGraphQL.Field(_type => FoodInRecipeWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInRecipeWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodInRecipeUpdateWithoutUnitInput, {
    nullable: false
  })
  data!: FoodInRecipeUpdateWithoutUnitInput;
}
