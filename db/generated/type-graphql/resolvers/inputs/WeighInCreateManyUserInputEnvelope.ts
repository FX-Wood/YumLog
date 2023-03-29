import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeighInCreateManyUserInput } from "../inputs/WeighInCreateManyUserInput";

@TypeGraphQL.InputType("WeighInCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class WeighInCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [WeighInCreateManyUserInput], {
    nullable: false
  })
  data!: WeighInCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
