import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateWithoutFoodNutritionInput } from "../inputs/UnitCreateWithoutFoodNutritionInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitCreateOrConnectWithoutFoodNutritionInput", {
  isAbstract: true
})
export class UnitCreateOrConnectWithoutFoodNutritionInput {
  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: false
  })
  where!: UnitWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnitCreateWithoutFoodNutritionInput, {
    nullable: false
  })
  create!: UnitCreateWithoutFoodNutritionInput;
}
