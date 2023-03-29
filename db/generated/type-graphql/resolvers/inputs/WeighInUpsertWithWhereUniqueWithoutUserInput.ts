import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeighInCreateWithoutUserInput } from "../inputs/WeighInCreateWithoutUserInput";
import { WeighInUpdateWithoutUserInput } from "../inputs/WeighInUpdateWithoutUserInput";
import { WeighInWhereUniqueInput } from "../inputs/WeighInWhereUniqueInput";

@TypeGraphQL.InputType("WeighInUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class WeighInUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => WeighInWhereUniqueInput, {
    nullable: false
  })
  where!: WeighInWhereUniqueInput;

  @TypeGraphQL.Field(_type => WeighInUpdateWithoutUserInput, {
    nullable: false
  })
  update!: WeighInUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => WeighInCreateWithoutUserInput, {
    nullable: false
  })
  create!: WeighInCreateWithoutUserInput;
}
