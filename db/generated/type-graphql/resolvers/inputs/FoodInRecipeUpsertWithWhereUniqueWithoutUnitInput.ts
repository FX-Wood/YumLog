import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateWithoutUnitInput } from "../inputs/FoodInRecipeCreateWithoutUnitInput";
import { FoodInRecipeUpdateWithoutUnitInput } from "../inputs/FoodInRecipeUpdateWithoutUnitInput";
import { FoodInRecipeWhereUniqueInput } from "../inputs/FoodInRecipeWhereUniqueInput";

@TypeGraphQL.InputType("FoodInRecipeUpsertWithWhereUniqueWithoutUnitInput", {
  isAbstract: true
})
export class FoodInRecipeUpsertWithWhereUniqueWithoutUnitInput {
  @TypeGraphQL.Field(_type => FoodInRecipeWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInRecipeWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodInRecipeUpdateWithoutUnitInput, {
    nullable: false
  })
  update!: FoodInRecipeUpdateWithoutUnitInput;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateWithoutUnitInput, {
    nullable: false
  })
  create!: FoodInRecipeCreateWithoutUnitInput;
}
