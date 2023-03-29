import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeighInCreateInput } from "../../../inputs/WeighInCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWeighInArgs {
  @TypeGraphQL.Field(_type => WeighInCreateInput, {
    nullable: false
  })
  data!: WeighInCreateInput;
}
