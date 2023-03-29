import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeighInUpdateInput } from "../../../inputs/WeighInUpdateInput";
import { WeighInWhereUniqueInput } from "../../../inputs/WeighInWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWeighInArgs {
  @TypeGraphQL.Field(_type => WeighInUpdateInput, {
    nullable: false
  })
  data!: WeighInUpdateInput;

  @TypeGraphQL.Field(_type => WeighInWhereUniqueInput, {
    nullable: false
  })
  where!: WeighInWhereUniqueInput;
}
