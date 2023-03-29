import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateManyUnitInput } from "../inputs/FoodInRecipeCreateManyUnitInput";

@TypeGraphQL.InputType("FoodInRecipeCreateManyUnitInputEnvelope", {
  isAbstract: true
})
export class FoodInRecipeCreateManyUnitInputEnvelope {
  @TypeGraphQL.Field(_type => [FoodInRecipeCreateManyUnitInput], {
    nullable: false
  })
  data!: FoodInRecipeCreateManyUnitInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
