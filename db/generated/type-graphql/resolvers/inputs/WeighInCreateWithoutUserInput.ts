import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("WeighInCreateWithoutUserInput", {
  isAbstract: true
})
export class WeighInCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  weight!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
