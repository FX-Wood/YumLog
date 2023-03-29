import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealCreateOrConnectWithoutFoodsInput } from "../inputs/MealCreateOrConnectWithoutFoodsInput";
import { MealCreateWithoutFoodsInput } from "../inputs/MealCreateWithoutFoodsInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";

@TypeGraphQL.InputType("MealCreateNestedOneWithoutFoodsInput", {
  isAbstract: true
})
export class MealCreateNestedOneWithoutFoodsInput {
  @TypeGraphQL.Field(_type => MealCreateWithoutFoodsInput, {
    nullable: true
  })
  create?: MealCreateWithoutFoodsInput | undefined;

  @TypeGraphQL.Field(_type => MealCreateOrConnectWithoutFoodsInput, {
    nullable: true
  })
  connectOrCreate?: MealCreateOrConnectWithoutFoodsInput | undefined;

  @TypeGraphQL.Field(_type => MealWhereUniqueInput, {
    nullable: true
  })
  connect?: MealWhereUniqueInput | undefined;
}
