import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealCreateOrConnectWithoutRecipesInput } from "../inputs/MealCreateOrConnectWithoutRecipesInput";
import { MealCreateWithoutRecipesInput } from "../inputs/MealCreateWithoutRecipesInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";

@TypeGraphQL.InputType("MealCreateNestedOneWithoutRecipesInput", {
  isAbstract: true
})
export class MealCreateNestedOneWithoutRecipesInput {
  @TypeGraphQL.Field(_type => MealCreateWithoutRecipesInput, {
    nullable: true
  })
  create?: MealCreateWithoutRecipesInput | undefined;

  @TypeGraphQL.Field(_type => MealCreateOrConnectWithoutRecipesInput, {
    nullable: true
  })
  connectOrCreate?: MealCreateOrConnectWithoutRecipesInput | undefined;

  @TypeGraphQL.Field(_type => MealWhereUniqueInput, {
    nullable: true
  })
  connect?: MealWhereUniqueInput | undefined;
}
