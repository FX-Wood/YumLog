import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateManyFoodInput } from "../inputs/FoodInRecipeCreateManyFoodInput";

@TypeGraphQL.InputType("FoodInRecipeCreateManyFoodInputEnvelope", {
  isAbstract: true
})
export class FoodInRecipeCreateManyFoodInputEnvelope {
  @TypeGraphQL.Field(_type => [FoodInRecipeCreateManyFoodInput], {
    nullable: false
  })
  data!: FoodInRecipeCreateManyFoodInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
