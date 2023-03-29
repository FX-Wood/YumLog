import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeighInUpdateManyMutationInput } from "../../../inputs/WeighInUpdateManyMutationInput";
import { WeighInWhereInput } from "../../../inputs/WeighInWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWeighInArgs {
  @TypeGraphQL.Field(_type => WeighInUpdateManyMutationInput, {
    nullable: false
  })
  data!: WeighInUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => WeighInWhereInput, {
    nullable: true
  })
  where?: WeighInWhereInput | undefined;
}
