import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeighInWhereUniqueInput } from "../../../inputs/WeighInWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneWeighInArgs {
  @TypeGraphQL.Field(_type => WeighInWhereUniqueInput, {
    nullable: false
  })
  where!: WeighInWhereUniqueInput;
}
