import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeCreateOrConnectWithoutMealsInput } from "../inputs/RecipeCreateOrConnectWithoutMealsInput";
import { RecipeCreateWithoutMealsInput } from "../inputs/RecipeCreateWithoutMealsInput";
import { RecipeUpdateWithoutMealsInput } from "../inputs/RecipeUpdateWithoutMealsInput";
import { RecipeUpsertWithoutMealsInput } from "../inputs/RecipeUpsertWithoutMealsInput";
import { RecipeWhereUniqueInput } from "../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.InputType("RecipeUpdateOneRequiredWithoutMealsNestedInput", {
  isAbstract: true
})
export class RecipeUpdateOneRequiredWithoutMealsNestedInput {
  @TypeGraphQL.Field(_type => RecipeCreateWithoutMealsInput, {
    nullable: true
  })
  create?: RecipeCreateWithoutMealsInput | undefined;

  @TypeGraphQL.Field(_type => RecipeCreateOrConnectWithoutMealsInput, {
    nullable: true
  })
  connectOrCreate?: RecipeCreateOrConnectWithoutMealsInput | undefined;

  @TypeGraphQL.Field(_type => RecipeUpsertWithoutMealsInput, {
    nullable: true
  })
  upsert?: RecipeUpsertWithoutMealsInput | undefined;

  @TypeGraphQL.Field(_type => RecipeWhereUniqueInput, {
    nullable: true
  })
  connect?: RecipeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RecipeUpdateWithoutMealsInput, {
    nullable: true
  })
  update?: RecipeUpdateWithoutMealsInput | undefined;
}
