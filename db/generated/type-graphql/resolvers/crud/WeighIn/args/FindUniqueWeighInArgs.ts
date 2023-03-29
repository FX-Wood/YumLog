import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeighInWhereUniqueInput } from "../../../inputs/WeighInWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWeighInArgs {
  @TypeGraphQL.Field(_type => WeighInWhereUniqueInput, {
    nullable: false
  })
  where!: WeighInWhereUniqueInput;
}
