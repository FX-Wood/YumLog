import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealCreateManyUserInputEnvelope } from "../inputs/MealCreateManyUserInputEnvelope";
import { MealCreateOrConnectWithoutUserInput } from "../inputs/MealCreateOrConnectWithoutUserInput";
import { MealCreateWithoutUserInput } from "../inputs/MealCreateWithoutUserInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";

@TypeGraphQL.InputType("MealCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class MealCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MealCreateWithoutUserInput], {
    nullable: true
  })
  create?: MealCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MealCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MealCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MealCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MealCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MealWhereUniqueInput], {
    nullable: true
  })
  connect?: MealWhereUniqueInput[] | undefined;
}
