import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealCreateOrConnectWithoutRecipesInput } from "../inputs/MealCreateOrConnectWithoutRecipesInput";
import { MealCreateWithoutRecipesInput } from "../inputs/MealCreateWithoutRecipesInput";
import { MealUpdateWithoutRecipesInput } from "../inputs/MealUpdateWithoutRecipesInput";
import { MealUpsertWithoutRecipesInput } from "../inputs/MealUpsertWithoutRecipesInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";

@TypeGraphQL.InputType("MealUpdateOneRequiredWithoutRecipesNestedInput", {
  isAbstract: true
})
export class MealUpdateOneRequiredWithoutRecipesNestedInput {
  @TypeGraphQL.Field(_type => MealCreateWithoutRecipesInput, {
    nullable: true
  })
  create?: MealCreateWithoutRecipesInput | undefined;

  @TypeGraphQL.Field(_type => MealCreateOrConnectWithoutRecipesInput, {
    nullable: true
  })
  connectOrCreate?: MealCreateOrConnectWithoutRecipesInput | undefined;

  @TypeGraphQL.Field(_type => MealUpsertWithoutRecipesInput, {
    nullable: true
  })
  upsert?: MealUpsertWithoutRecipesInput | undefined;

  @TypeGraphQL.Field(_type => MealWhereUniqueInput, {
    nullable: true
  })
  connect?: MealWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MealUpdateWithoutRecipesInput, {
    nullable: true
  })
  update?: MealUpdateWithoutRecipesInput | undefined;
}
