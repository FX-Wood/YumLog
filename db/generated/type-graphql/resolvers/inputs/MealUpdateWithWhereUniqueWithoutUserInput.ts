import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealUpdateWithoutUserInput } from "../inputs/MealUpdateWithoutUserInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";

@TypeGraphQL.InputType("MealUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class MealUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MealWhereUniqueInput, {
    nullable: false
  })
  where!: MealWhereUniqueInput;

  @TypeGraphQL.Field(_type => MealUpdateWithoutUserInput, {
    nullable: false
  })
  data!: MealUpdateWithoutUserInput;
}
