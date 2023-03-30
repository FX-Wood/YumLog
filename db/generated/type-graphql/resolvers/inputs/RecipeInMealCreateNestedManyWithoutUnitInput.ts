import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealCreateManyUnitInputEnvelope } from "../inputs/RecipeInMealCreateManyUnitInputEnvelope";
import { RecipeInMealCreateOrConnectWithoutUnitInput } from "../inputs/RecipeInMealCreateOrConnectWithoutUnitInput";
import { RecipeInMealCreateWithoutUnitInput } from "../inputs/RecipeInMealCreateWithoutUnitInput";
import { RecipeInMealWhereUniqueInput } from "../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.InputType("RecipeInMealCreateNestedManyWithoutUnitInput", {
  isAbstract: true
})
export class RecipeInMealCreateNestedManyWithoutUnitInput {
  @TypeGraphQL.Field(_type => [RecipeInMealCreateWithoutUnitInput], {
    nullable: true
  })
  create?: RecipeInMealCreateWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealCreateOrConnectWithoutUnitInput], {
    nullable: true
  })
  connectOrCreate?: RecipeInMealCreateOrConnectWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealCreateManyUnitInputEnvelope, {
    nullable: true
  })
  createMany?: RecipeInMealCreateManyUnitInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealWhereUniqueInput], {
    nullable: true
  })
  connect?: RecipeInMealWhereUniqueInput[] | undefined;
}
