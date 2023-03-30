import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealCreateManyRecipeInputEnvelope } from "../inputs/RecipeInMealCreateManyRecipeInputEnvelope";
import { RecipeInMealCreateOrConnectWithoutRecipeInput } from "../inputs/RecipeInMealCreateOrConnectWithoutRecipeInput";
import { RecipeInMealCreateWithoutRecipeInput } from "../inputs/RecipeInMealCreateWithoutRecipeInput";
import { RecipeInMealScalarWhereInput } from "../inputs/RecipeInMealScalarWhereInput";
import { RecipeInMealUpdateManyWithWhereWithoutRecipeInput } from "../inputs/RecipeInMealUpdateManyWithWhereWithoutRecipeInput";
import { RecipeInMealUpdateWithWhereUniqueWithoutRecipeInput } from "../inputs/RecipeInMealUpdateWithWhereUniqueWithoutRecipeInput";
import { RecipeInMealUpsertWithWhereUniqueWithoutRecipeInput } from "../inputs/RecipeInMealUpsertWithWhereUniqueWithoutRecipeInput";
import { RecipeInMealWhereUniqueInput } from "../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.InputType("RecipeInMealUpdateManyWithoutRecipeNestedInput", {
  isAbstract: true
})
export class RecipeInMealUpdateManyWithoutRecipeNestedInput {
  @TypeGraphQL.Field(_type => [RecipeInMealCreateWithoutRecipeInput], {
    nullable: true
  })
  create?: RecipeInMealCreateWithoutRecipeInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealCreateOrConnectWithoutRecipeInput], {
    nullable: true
  })
  connectOrCreate?: RecipeInMealCreateOrConnectWithoutRecipeInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealUpsertWithWhereUniqueWithoutRecipeInput], {
    nullable: true
  })
  upsert?: RecipeInMealUpsertWithWhereUniqueWithoutRecipeInput[] | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealCreateManyRecipeInputEnvelope, {
    nullable: true
  })
  createMany?: RecipeInMealCreateManyRecipeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealWhereUniqueInput], {
    nullable: true
  })
  set?: RecipeInMealWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RecipeInMealWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealWhereUniqueInput], {
    nullable: true
  })
  delete?: RecipeInMealWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealWhereUniqueInput], {
    nullable: true
  })
  connect?: RecipeInMealWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealUpdateWithWhereUniqueWithoutRecipeInput], {
    nullable: true
  })
  update?: RecipeInMealUpdateWithWhereUniqueWithoutRecipeInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealUpdateManyWithWhereWithoutRecipeInput], {
    nullable: true
  })
  updateMany?: RecipeInMealUpdateManyWithWhereWithoutRecipeInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RecipeInMealScalarWhereInput[] | undefined;
}
