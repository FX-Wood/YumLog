import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateOrConnectWithoutMealFoodsInput } from "../inputs/UnitCreateOrConnectWithoutMealFoodsInput";
import { UnitCreateWithoutMealFoodsInput } from "../inputs/UnitCreateWithoutMealFoodsInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitCreateNestedOneWithoutMealFoodsInput", {
  isAbstract: true
})
export class UnitCreateNestedOneWithoutMealFoodsInput {
  @TypeGraphQL.Field(_type => UnitCreateWithoutMealFoodsInput, {
    nullable: true
  })
  create?: UnitCreateWithoutMealFoodsInput | undefined;

  @TypeGraphQL.Field(_type => UnitCreateOrConnectWithoutMealFoodsInput, {
    nullable: true
  })
  connectOrCreate?: UnitCreateOrConnectWithoutMealFoodsInput | undefined;

  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: true
  })
  connect?: UnitWhereUniqueInput | undefined;
}
