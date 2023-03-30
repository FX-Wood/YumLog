import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutWeighInsInput } from "../inputs/UserCreateNestedOneWithoutWeighInsInput";

@TypeGraphQL.InputType("WeighInCreateInput", {
  isAbstract: true
})
export class WeighInCreateInput {
  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  weight!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutWeighInsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutWeighInsInput;
}
