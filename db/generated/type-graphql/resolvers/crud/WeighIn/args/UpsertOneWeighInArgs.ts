import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeighInCreateInput } from "../../../inputs/WeighInCreateInput";
import { WeighInUpdateInput } from "../../../inputs/WeighInUpdateInput";
import { WeighInWhereUniqueInput } from "../../../inputs/WeighInWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWeighInArgs {
  @TypeGraphQL.Field(_type => WeighInWhereUniqueInput, {
    nullable: false
  })
  where!: WeighInWhereUniqueInput;

  @TypeGraphQL.Field(_type => WeighInCreateInput, {
    nullable: false
  })
  create!: WeighInCreateInput;

  @TypeGraphQL.Field(_type => WeighInUpdateInput, {
    nullable: false
  })
  update!: WeighInUpdateInput;
}
