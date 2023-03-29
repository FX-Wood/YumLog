import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeighInScalarWhereInput } from "../inputs/WeighInScalarWhereInput";
import { WeighInUpdateManyMutationInput } from "../inputs/WeighInUpdateManyMutationInput";

@TypeGraphQL.InputType("WeighInUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class WeighInUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => WeighInScalarWhereInput, {
    nullable: false
  })
  where!: WeighInScalarWhereInput;

  @TypeGraphQL.Field(_type => WeighInUpdateManyMutationInput, {
    nullable: false
  })
  data!: WeighInUpdateManyMutationInput;
}
