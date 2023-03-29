import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealScalarWhereInput } from "../inputs/MealScalarWhereInput";
import { MealUpdateManyMutationInput } from "../inputs/MealUpdateManyMutationInput";

@TypeGraphQL.InputType("MealUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class MealUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => MealScalarWhereInput, {
    nullable: false
  })
  where!: MealScalarWhereInput;

  @TypeGraphQL.Field(_type => MealUpdateManyMutationInput, {
    nullable: false
  })
  data!: MealUpdateManyMutationInput;
}
