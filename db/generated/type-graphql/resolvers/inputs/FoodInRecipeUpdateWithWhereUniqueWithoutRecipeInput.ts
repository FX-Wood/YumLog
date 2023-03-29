import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeUpdateWithoutRecipeInput } from "../inputs/FoodInRecipeUpdateWithoutRecipeInput";
import { FoodInRecipeWhereUniqueInput } from "../inputs/FoodInRecipeWhereUniqueInput";

@TypeGraphQL.InputType("FoodInRecipeUpdateWithWhereUniqueWithoutRecipeInput", {
  isAbstract: true
})
export class FoodInRecipeUpdateWithWhereUniqueWithoutRecipeInput {
  @TypeGraphQL.Field(_type => FoodInRecipeWhereUniqueInput, {
    nullable: false
  })
  where!: FoodInRecipeWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodInRecipeUpdateWithoutRecipeInput, {
    nullable: false
  })
  data!: FoodInRecipeUpdateWithoutRecipeInput;
}
