import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeighInCreateWithoutUserInput } from "../inputs/WeighInCreateWithoutUserInput";
import { WeighInWhereUniqueInput } from "../inputs/WeighInWhereUniqueInput";

@TypeGraphQL.InputType("WeighInCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class WeighInCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => WeighInWhereUniqueInput, {
    nullable: false
  })
  where!: WeighInWhereUniqueInput;

  @TypeGraphQL.Field(_type => WeighInCreateWithoutUserInput, {
    nullable: false
  })
  create!: WeighInCreateWithoutUserInput;
}
