import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealCreateWithoutFoodsInput } from "../inputs/MealCreateWithoutFoodsInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";

@TypeGraphQL.InputType("MealCreateOrConnectWithoutFoodsInput", {
  isAbstract: true
})
export class MealCreateOrConnectWithoutFoodsInput {
  @TypeGraphQL.Field(_type => MealWhereUniqueInput, {
    nullable: false
  })
  where!: MealWhereUniqueInput;

  @TypeGraphQL.Field(_type => MealCreateWithoutFoodsInput, {
    nullable: false
  })
  create!: MealCreateWithoutFoodsInput;
}
