import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealCreateManyRecipeInput } from "../inputs/RecipeInMealCreateManyRecipeInput";

@TypeGraphQL.InputType("RecipeInMealCreateManyRecipeInputEnvelope", {
  isAbstract: true
})
export class RecipeInMealCreateManyRecipeInputEnvelope {
  @TypeGraphQL.Field(_type => [RecipeInMealCreateManyRecipeInput], {
    nullable: false
  })
  data!: RecipeInMealCreateManyRecipeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
