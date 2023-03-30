import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodNutritionCreateManyFoodInput } from "../inputs/FoodNutritionCreateManyFoodInput";

@TypeGraphQL.InputType("FoodNutritionCreateManyFoodInputEnvelope", {
  isAbstract: true
})
export class FoodNutritionCreateManyFoodInputEnvelope {
  @TypeGraphQL.Field(_type => [FoodNutritionCreateManyFoodInput], {
    nullable: false
  })
  data!: FoodNutritionCreateManyFoodInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
