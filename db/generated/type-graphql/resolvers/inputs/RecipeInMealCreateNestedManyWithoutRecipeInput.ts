import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealCreateManyRecipeInputEnvelope } from "../inputs/RecipeInMealCreateManyRecipeInputEnvelope";
import { RecipeInMealCreateOrConnectWithoutRecipeInput } from "../inputs/RecipeInMealCreateOrConnectWithoutRecipeInput";
import { RecipeInMealCreateWithoutRecipeInput } from "../inputs/RecipeInMealCreateWithoutRecipeInput";
import { RecipeInMealWhereUniqueInput } from "../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.InputType("RecipeInMealCreateNestedManyWithoutRecipeInput", {
  isAbstract: true
})
export class RecipeInMealCreateNestedManyWithoutRecipeInput {
  @TypeGraphQL.Field(_type => [RecipeInMealCreateWithoutRecipeInput], {
    nullable: true
  })
  create?: RecipeInMealCreateWithoutRecipeInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealCreateOrConnectWithoutRecipeInput], {
    nullable: true
  })
  connectOrCreate?: RecipeInMealCreateOrConnectWithoutRecipeInput[] | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealCreateManyRecipeInputEnvelope, {
    nullable: true
  })
  createMany?: RecipeInMealCreateManyRecipeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealWhereUniqueInput], {
    nullable: true
  })
  connect?: RecipeInMealWhereUniqueInput[] | undefined;
}
