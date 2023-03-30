import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateOrConnectWithoutMealRecipeInput } from "../inputs/UnitCreateOrConnectWithoutMealRecipeInput";
import { UnitCreateWithoutMealRecipeInput } from "../inputs/UnitCreateWithoutMealRecipeInput";
import { UnitUpdateWithoutMealRecipeInput } from "../inputs/UnitUpdateWithoutMealRecipeInput";
import { UnitUpsertWithoutMealRecipeInput } from "../inputs/UnitUpsertWithoutMealRecipeInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitUpdateOneRequiredWithoutMealRecipeNestedInput", {
  isAbstract: true
})
export class UnitUpdateOneRequiredWithoutMealRecipeNestedInput {
  @TypeGraphQL.Field(_type => UnitCreateWithoutMealRecipeInput, {
    nullable: true
  })
  create?: UnitCreateWithoutMealRecipeInput | undefined;

  @TypeGraphQL.Field(_type => UnitCreateOrConnectWithoutMealRecipeInput, {
    nullable: true
  })
  connectOrCreate?: UnitCreateOrConnectWithoutMealRecipeInput | undefined;

  @TypeGraphQL.Field(_type => UnitUpsertWithoutMealRecipeInput, {
    nullable: true
  })
  upsert?: UnitUpsertWithoutMealRecipeInput | undefined;

  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: true
  })
  connect?: UnitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UnitUpdateWithoutMealRecipeInput, {
    nullable: true
  })
  update?: UnitUpdateWithoutMealRecipeInput | undefined;
}
