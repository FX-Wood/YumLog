import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateWithoutMealRecipeInput } from "../inputs/UnitCreateWithoutMealRecipeInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitCreateOrConnectWithoutMealRecipeInput", {
  isAbstract: true
})
export class UnitCreateOrConnectWithoutMealRecipeInput {
  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: false
  })
  where!: UnitWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnitCreateWithoutMealRecipeInput, {
    nullable: false
  })
  create!: UnitCreateWithoutMealRecipeInput;
}
