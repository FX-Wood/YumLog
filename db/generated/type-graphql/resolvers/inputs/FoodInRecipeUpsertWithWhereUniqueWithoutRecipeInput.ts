import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateWithoutRecipeInput } from "../inputs/FoodInRecipeCreateWithoutRecipeInput";
import { FoodInRecipeUpdateWithoutRecipeInput } from "../inputs/FoodInRecipeUpdateWithoutRecipeInput";
import { FoodInRecipeWhereUniqueInput } from "../inputs/FoodInRecipeWhereUniqueInput";

@TypeGraphQL.InputType("FoodInRecipeUpsertWithWhereUniqueWithoutRecipeInput", {
  isAbstract: true
})
export class FoodInRecipeUpsertWithWhereUniqueWithoutRecipeInput {
  @TypeGraphQL.Field(_type => FoodInRecipeWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInRecipeWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodInRecipeUpdateWithoutRecipeInput, {
    nullable: false
  })
  update!: FoodInRecipeUpdateWithoutRecipeInput;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateWithoutRecipeInput, {
    nullable: false
  })
  create!: FoodInRecipeCreateWithoutRecipeInput;
}
