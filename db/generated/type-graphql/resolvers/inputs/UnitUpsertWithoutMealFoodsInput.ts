import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateWithoutMealFoodsInput } from "../inputs/UnitCreateWithoutMealFoodsInput";
import { UnitUpdateWithoutMealFoodsInput } from "../inputs/UnitUpdateWithoutMealFoodsInput";

@TypeGraphQL.InputType("UnitUpsertWithoutMealFoodsInput", {
  isAbstract: true
})
export class UnitUpsertWithoutMealFoodsInput {
  @TypeGraphQL.Field(_type => UnitUpdateWithoutMealFoodsInput, {
    nullable: false
  })
  update!: UnitUpdateWithoutMealFoodsInput;

  @TypeGraphQL.Field(_type => UnitCreateWithoutMealFoodsInput, {
    nullable: false
  })
  create!: UnitCreateWithoutMealFoodsInput;
}
