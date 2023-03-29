import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateManyRecipeInput } from "../inputs/FoodInRecipeCreateManyRecipeInput";

@TypeGraphQL.InputType("FoodInRecipeCreateManyRecipeInputEnvelope", {
  isAbstract: true
})
export class FoodInRecipeCreateManyRecipeInputEnvelope {
  @TypeGraphQL.Field(_type => [FoodInRecipeCreateManyRecipeInput], {
    nullable: false
  })
  data!: FoodInRecipeCreateManyRecipeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
