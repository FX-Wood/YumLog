import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateOrConnectWithoutFoodNutritionInput } from "../inputs/UnitCreateOrConnectWithoutFoodNutritionInput";
import { UnitCreateWithoutFoodNutritionInput } from "../inputs/UnitCreateWithoutFoodNutritionInput";
import { UnitUpdateWithoutFoodNutritionInput } from "../inputs/UnitUpdateWithoutFoodNutritionInput";
import { UnitUpsertWithoutFoodNutritionInput } from "../inputs/UnitUpsertWithoutFoodNutritionInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitUpdateOneRequiredWithoutFoodNutritionNestedInput", {
  isAbstract: true
})
export class UnitUpdateOneRequiredWithoutFoodNutritionNestedInput {
  @TypeGraphQL.Field(_type => UnitCreateWithoutFoodNutritionInput, {
    nullable: true
  })
  create?: UnitCreateWithoutFoodNutritionInput | undefined;

  @TypeGraphQL.Field(_type => UnitCreateOrConnectWithoutFoodNutritionInput, {
    nullable: true
  })
  connectOrCreate?: UnitCreateOrConnectWithoutFoodNutritionInput | undefined;

  @TypeGraphQL.Field(_type => UnitUpsertWithoutFoodNutritionInput, {
    nullable: true
  })
  upsert?: UnitUpsertWithoutFoodNutritionInput | undefined;

  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: true
  })
  connect?: UnitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UnitUpdateWithoutFoodNutritionInput, {
    nullable: true
  })
  update?: UnitUpdateWithoutFoodNutritionInput | undefined;
}
