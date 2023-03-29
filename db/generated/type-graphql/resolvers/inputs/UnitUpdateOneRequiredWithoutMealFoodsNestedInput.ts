import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateOrConnectWithoutMealFoodsInput } from "../inputs/UnitCreateOrConnectWithoutMealFoodsInput";
import { UnitCreateWithoutMealFoodsInput } from "../inputs/UnitCreateWithoutMealFoodsInput";
import { UnitUpdateWithoutMealFoodsInput } from "../inputs/UnitUpdateWithoutMealFoodsInput";
import { UnitUpsertWithoutMealFoodsInput } from "../inputs/UnitUpsertWithoutMealFoodsInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitUpdateOneRequiredWithoutMealFoodsNestedInput", {
  isAbstract: true
})
export class UnitUpdateOneRequiredWithoutMealFoodsNestedInput {
  @TypeGraphQL.Field(_type => UnitCreateWithoutMealFoodsInput, {
    nullable: true
  })
  create?: UnitCreateWithoutMealFoodsInput | undefined;

  @TypeGraphQL.Field(_type => UnitCreateOrConnectWithoutMealFoodsInput, {
    nullable: true
  })
  connectOrCreate?: UnitCreateOrConnectWithoutMealFoodsInput | undefined;

  @TypeGraphQL.Field(_type => UnitUpsertWithoutMealFoodsInput, {
    nullable: true
  })
  upsert?: UnitUpsertWithoutMealFoodsInput | undefined;

  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: true
  })
  connect?: UnitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UnitUpdateWithoutMealFoodsInput, {
    nullable: true
  })
  update?: UnitUpdateWithoutMealFoodsInput | undefined;
}
