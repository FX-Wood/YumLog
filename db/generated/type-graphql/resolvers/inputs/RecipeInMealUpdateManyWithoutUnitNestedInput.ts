import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealCreateManyUnitInputEnvelope } from "../inputs/RecipeInMealCreateManyUnitInputEnvelope";
import { RecipeInMealCreateOrConnectWithoutUnitInput } from "../inputs/RecipeInMealCreateOrConnectWithoutUnitInput";
import { RecipeInMealCreateWithoutUnitInput } from "../inputs/RecipeInMealCreateWithoutUnitInput";
import { RecipeInMealScalarWhereInput } from "../inputs/RecipeInMealScalarWhereInput";
import { RecipeInMealUpdateManyWithWhereWithoutUnitInput } from "../inputs/RecipeInMealUpdateManyWithWhereWithoutUnitInput";
import { RecipeInMealUpdateWithWhereUniqueWithoutUnitInput } from "../inputs/RecipeInMealUpdateWithWhereUniqueWithoutUnitInput";
import { RecipeInMealUpsertWithWhereUniqueWithoutUnitInput } from "../inputs/RecipeInMealUpsertWithWhereUniqueWithoutUnitInput";
import { RecipeInMealWhereUniqueInput } from "../inputs/RecipeInMealWhereUniqueInput";

@TypeGraphQL.InputType("RecipeInMealUpdateManyWithoutUnitNestedInput", {
  isAbstract: true
})
export class RecipeInMealUpdateManyWithoutUnitNestedInput {
  @TypeGraphQL.Field(_type => [RecipeInMealCreateWithoutUnitInput], {
    nullable: true
  })
  create?: RecipeInMealCreateWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealCreateOrConnectWithoutUnitInput], {
    nullable: true
  })
  connectOrCreate?: RecipeInMealCreateOrConnectWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealUpsertWithWhereUniqueWithoutUnitInput], {
    nullable: true
  })
  upsert?: RecipeInMealUpsertWithWhereUniqueWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => RecipeInMealCreateManyUnitInputEnvelope, {
    nullable: true
  })
  createMany?: RecipeInMealCreateManyUnitInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [RecipeInMealUpdateWithWhereUniqueWithoutUnitInput], {
    nullable: true
  })
  update?: RecipeInMealUpdateWithWhereUniqueWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealUpdateManyWithWhereWithoutUnitInput], {
    nullable: true
  })
  updateMany?: RecipeInMealUpdateManyWithWhereWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeInMealScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RecipeInMealScalarWhereInput[] | undefined;
}
