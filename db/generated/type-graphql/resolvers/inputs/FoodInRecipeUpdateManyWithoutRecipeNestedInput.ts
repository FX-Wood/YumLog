import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeCreateManyRecipeInputEnvelope } from "../inputs/FoodInRecipeCreateManyRecipeInputEnvelope";
import { FoodInRecipeCreateOrConnectWithoutRecipeInput } from "../inputs/FoodInRecipeCreateOrConnectWithoutRecipeInput";
import { FoodInRecipeCreateWithoutRecipeInput } from "../inputs/FoodInRecipeCreateWithoutRecipeInput";
import { FoodInRecipeScalarWhereInput } from "../inputs/FoodInRecipeScalarWhereInput";
import { FoodInRecipeUpdateManyWithWhereWithoutRecipeInput } from "../inputs/FoodInRecipeUpdateManyWithWhereWithoutRecipeInput";
import { FoodInRecipeUpdateWithWhereUniqueWithoutRecipeInput } from "../inputs/FoodInRecipeUpdateWithWhereUniqueWithoutRecipeInput";
import { FoodInRecipeUpsertWithWhereUniqueWithoutRecipeInput } from "../inputs/FoodInRecipeUpsertWithWhereUniqueWithoutRecipeInput";
import { FoodInRecipeWhereUniqueInput } from "../inputs/FoodInRecipeWhereUniqueInput";

@TypeGraphQL.InputType("FoodInRecipeUpdateManyWithoutRecipeNestedInput", {
  isAbstract: true
})
export class FoodInRecipeUpdateManyWithoutRecipeNestedInput {
  @TypeGraphQL.Field(_type => [FoodInRecipeCreateWithoutRecipeInput], {
    nullable: true
  })
  create?: FoodInRecipeCreateWithoutRecipeInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeCreateOrConnectWithoutRecipeInput], {
    nullable: true
  })
  connectOrCreate?: FoodInRecipeCreateOrConnectWithoutRecipeInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeUpsertWithWhereUniqueWithoutRecipeInput], {
    nullable: true
  })
  upsert?: FoodInRecipeUpsertWithWhereUniqueWithoutRecipeInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodInRecipeCreateManyRecipeInputEnvelope, {
    nullable: true
  })
  createMany?: FoodInRecipeCreateManyRecipeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeWhereUniqueInput], {
    nullable: true
  })
  set?: FoodInRecipeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FoodInRecipeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeWhereUniqueInput], {
    nullable: true
  })
  delete?: FoodInRecipeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeWhereUniqueInput], {
    nullable: true
  })
  connect?: FoodInRecipeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeUpdateWithWhereUniqueWithoutRecipeInput], {
    nullable: true
  })
  update?: FoodInRecipeUpdateWithWhereUniqueWithoutRecipeInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeUpdateManyWithWhereWithoutRecipeInput], {
    nullable: true
  })
  updateMany?: FoodInRecipeUpdateManyWithWhereWithoutRecipeInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodInRecipeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FoodInRecipeScalarWhereInput[] | undefined;
}
