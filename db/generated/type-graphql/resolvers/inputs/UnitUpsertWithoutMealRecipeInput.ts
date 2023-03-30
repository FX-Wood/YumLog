import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateWithoutMealRecipeInput } from "../inputs/UnitCreateWithoutMealRecipeInput";
import { UnitUpdateWithoutMealRecipeInput } from "../inputs/UnitUpdateWithoutMealRecipeInput";

@TypeGraphQL.InputType("UnitUpsertWithoutMealRecipeInput", {
  isAbstract: true
})
export class UnitUpsertWithoutMealRecipeInput {
  @TypeGraphQL.Field(_type => UnitUpdateWithoutMealRecipeInput, {
    nullable: false
  })
  update!: UnitUpdateWithoutMealRecipeInput;

  @TypeGraphQL.Field(_type => UnitCreateWithoutMealRecipeInput, {
    nullable: false
  })
  create!: UnitCreateWithoutMealRecipeInput;
}
