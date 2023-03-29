import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeCreateOrConnectWithoutFoodsInput } from "../inputs/RecipeCreateOrConnectWithoutFoodsInput";
import { RecipeCreateWithoutFoodsInput } from "../inputs/RecipeCreateWithoutFoodsInput";
import { RecipeUpdateWithoutFoodsInput } from "../inputs/RecipeUpdateWithoutFoodsInput";
import { RecipeUpsertWithoutFoodsInput } from "../inputs/RecipeUpsertWithoutFoodsInput";
import { RecipeWhereUniqueInput } from "../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.InputType("RecipeUpdateOneRequiredWithoutFoodsNestedInput", {
  isAbstract: true
})
export class RecipeUpdateOneRequiredWithoutFoodsNestedInput {
  @TypeGraphQL.Field(_type => RecipeCreateWithoutFoodsInput, {
    nullable: true
  })
  create?: RecipeCreateWithoutFoodsInput | undefined;

  @TypeGraphQL.Field(_type => RecipeCreateOrConnectWithoutFoodsInput, {
    nullable: true
  })
  connectOrCreate?: RecipeCreateOrConnectWithoutFoodsInput | undefined;

  @TypeGraphQL.Field(_type => RecipeUpsertWithoutFoodsInput, {
    nullable: true
  })
  upsert?: RecipeUpsertWithoutFoodsInput | undefined;

  @TypeGraphQL.Field(_type => RecipeWhereUniqueInput, {
    nullable: true
  })
  connect?: RecipeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RecipeUpdateWithoutFoodsInput, {
    nullable: true
  })
  update?: RecipeUpdateWithoutFoodsInput | undefined;
}
