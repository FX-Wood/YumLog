import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealCreateManyMealInputEnvelope } from "../inputs/RecipeInMealCreateManyMealInputEnvelope";
import { RecipeInMealCreateOrConnectWithoutMealInput } from "../inputs/RecipeInMealCreateOrConnectWithoutMealInput";
import { RecipeInMealCreateWithoutMealInput } from "../inputs/RecipeInMealCreateWithoutMealInput";
import { RecipeInMealScalarWhereInput } from "../inputs/RecipeInMealScalarWhereInput";
import { RecipeInMealUpdateManyWithWhereWithoutMealInput } from "../inputs/RecipeInMealUpdateManyWithWhereWithoutMealInput";
import { RecipeInMealUpdateWithWhereUniqueWithoutMealInput } from "../inputs/RecipeInMealUpdateWithWhereUniqueWithoutMealInput";
import { RecipeInMealUpsertWithWhereUniqueWithoutMealInput } from "../inputs/RecipeInMealUpsertWithWhereUniqueWithoutMealInput";
import { RecipeInMealWhereUniqueInput } from "../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.InputType("RecipeInMealUpdateManyWithoutMealNestedInput", {
  isAbstract: true
})
export class RecipeInMealUpdateManyWithoutMealNestedInput {
  @TypeGraphQL.Field(_type => [RecipeInMealCreateWithoutMealInput], {
    nullable: true
  })
  create?: RecipeInMealCreateWithoutMealInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealCreateOrConnectWithoutMealInput], {
    nullable: true
  })
  connectOrCreate?: RecipeInMealCreateOrConnectWithoutMealInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealUpsertWithWhereUniqueWithoutMealInput], {
    nullable: true
  })
  upsert?: RecipeInMealUpsertWithWhereUniqueWithoutMealInput[] | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealCreateManyMealInputEnvelope, {
    nullable: true
  })
  createMany?: RecipeInMealCreateManyMealInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [RecipeInMealUpdateWithWhereUniqueWithoutMealInput], {
    nullable: true
  })
  update?: RecipeInMealUpdateWithWhereUniqueWithoutMealInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealUpdateManyWithWhereWithoutMealInput], {
    nullable: true
  })
  updateMany?: RecipeInMealUpdateManyWithWhereWithoutMealInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RecipeInMealScalarWhereInput[] | undefined;
}
