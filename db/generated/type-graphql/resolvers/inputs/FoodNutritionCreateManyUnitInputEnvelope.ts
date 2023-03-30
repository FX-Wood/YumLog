import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodNutritionCreateManyUnitInput } from "../inputs/FoodNutritionCreateManyUnitInput";

@TypeGraphQL.InputType("FoodNutritionCreateManyUnitInputEnvelope", {
  isAbstract: true
})
export class FoodNutritionCreateManyUnitInputEnvelope {
  @TypeGraphQL.Field(_type => [FoodNutritionCreateManyUnitInput], {
    nullable: false
  })
  data!: FoodNutritionCreateManyUnitInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
