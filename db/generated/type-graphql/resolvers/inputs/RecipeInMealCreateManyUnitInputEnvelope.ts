import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealCreateManyUnitInput } from "../inputs/RecipeInMealCreateManyUnitInput";

@TypeGraphQL.InputType("RecipeInMealCreateManyUnitInputEnvelope", {
  isAbstract: true
})
export class RecipeInMealCreateManyUnitInputEnvelope {
  @TypeGraphQL.Field(_type => [RecipeInMealCreateManyUnitInput], {
    nullable: false
  })
  data!: RecipeInMealCreateManyUnitInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
