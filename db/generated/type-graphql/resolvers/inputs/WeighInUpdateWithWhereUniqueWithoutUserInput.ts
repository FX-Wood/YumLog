import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeighInUpdateWithoutUserInput } from "../inputs/WeighInUpdateWithoutUserInput";
import { WeighInWhereUniqueInput } from "../inputs/WeighInWhereUniqueInput";

@TypeGraphQL.InputType("WeighInUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class WeighInUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => WeighInWhereUniqueInput, {
    nullable: false
  })
  where!: WeighInWhereUniqueInput;

  @TypeGraphQL.Field(_type => WeighInUpdateWithoutUserInput, {
    nullable: false
  })
  data!: WeighInUpdateWithoutUserInput;
}
