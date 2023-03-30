import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealCreateManyMealInput } from "../inputs/RecipeInMealCreateManyMealInput";

@TypeGraphQL.InputType("RecipeInMealCreateManyMealInputEnvelope", {
  isAbstract: true
})
export class RecipeInMealCreateManyMealInputEnvelope {
  @TypeGraphQL.Field(_type => [RecipeInMealCreateManyMealInput], {
    nullable: false
  })
  data!: RecipeInMealCreateManyMealInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
