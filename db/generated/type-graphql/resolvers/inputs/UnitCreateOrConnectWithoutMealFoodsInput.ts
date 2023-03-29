import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateWithoutMealFoodsInput } from "../inputs/UnitCreateWithoutMealFoodsInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitCreateOrConnectWithoutMealFoodsInput", {
  isAbstract: true
})
export class UnitCreateOrConnectWithoutMealFoodsInput {
  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: false
  })
  where!: UnitWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnitCreateWithoutMealFoodsInput, {
    nullable: false
  })
  create!: UnitCreateWithoutMealFoodsInput;
}
