import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealCreateManyMealInputEnvelope } from "../inputs/RecipeInMealCreateManyMealInputEnvelope";
import { RecipeInMealCreateOrConnectWithoutMealInput } from "../inputs/RecipeInMealCreateOrConnectWithoutMealInput";
import { RecipeInMealCreateWithoutMealInput } from "../inputs/RecipeInMealCreateWithoutMealInput";
import { RecipeInMealWhereUniqueInput } from "../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.InputType("RecipeInMealCreateNestedManyWithoutMealInput", {
  isAbstract: true
})
export class RecipeInMealCreateNestedManyWithoutMealInput {
  @TypeGraphQL.Field(_type => [RecipeInMealCreateWithoutMealInput], {
    nullable: true
  })
  create?: RecipeInMealCreateWithoutMealInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealCreateOrConnectWithoutMealInput], {
    nullable: true
  })
  connectOrCreate?: RecipeInMealCreateOrConnectWithoutMealInput[] | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealCreateManyMealInputEnvelope, {
    nullable: true
  })
  createMany?: RecipeInMealCreateManyMealInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealWhereUniqueInput], {
    nullable: true
  })
  connect?: RecipeInMealWhereUniqueInput[] | undefined;
}
