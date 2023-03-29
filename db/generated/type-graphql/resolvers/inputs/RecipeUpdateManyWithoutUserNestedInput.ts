import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeCreateManyUserInputEnvelope } from "../inputs/RecipeCreateManyUserInputEnvelope";
import { RecipeCreateOrConnectWithoutUserInput } from "../inputs/RecipeCreateOrConnectWithoutUserInput";
import { RecipeCreateWithoutUserInput } from "../inputs/RecipeCreateWithoutUserInput";
import { RecipeScalarWhereInput } from "../inputs/RecipeScalarWhereInput";
import { RecipeUpdateManyWithWhereWithoutUserInput } from "../inputs/RecipeUpdateManyWithWhereWithoutUserInput";
import { RecipeUpdateWithWhereUniqueWithoutUserInput } from "../inputs/RecipeUpdateWithWhereUniqueWithoutUserInput";
import { RecipeUpsertWithWhereUniqueWithoutUserInput } from "../inputs/RecipeUpsertWithWhereUniqueWithoutUserInput";
import { RecipeWhereUniqueInput } from "../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.InputType("RecipeUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class RecipeUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [RecipeCreateWithoutUserInput], {
    nullable: true
  })
  create?: RecipeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: RecipeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: RecipeUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => RecipeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: RecipeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RecipeWhereUniqueInput], {
    nullable: true
  })
  set?: RecipeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RecipeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeWhereUniqueInput], {
    nullable: true
  })
  delete?: RecipeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeWhereUniqueInput], {
    nullable: true
  })
  connect?: RecipeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: RecipeUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: RecipeUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RecipeScalarWhereInput[] | undefined;
}
