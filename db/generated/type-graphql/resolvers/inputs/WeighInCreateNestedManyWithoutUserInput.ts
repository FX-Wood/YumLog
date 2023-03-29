import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeighInCreateManyUserInputEnvelope } from "../inputs/WeighInCreateManyUserInputEnvelope";
import { WeighInCreateOrConnectWithoutUserInput } from "../inputs/WeighInCreateOrConnectWithoutUserInput";
import { WeighInCreateWithoutUserInput } from "../inputs/WeighInCreateWithoutUserInput";
import { WeighInWhereUniqueInput } from "../inputs/WeighInWhereUniqueInput";

@TypeGraphQL.InputType("WeighInCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class WeighInCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [WeighInCreateWithoutUserInput], {
    nullable: true
  })
  create?: WeighInCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeighInCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: WeighInCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => WeighInCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: WeighInCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WeighInWhereUniqueInput], {
    nullable: true
  })
  connect?: WeighInWhereUniqueInput[] | undefined;
}
