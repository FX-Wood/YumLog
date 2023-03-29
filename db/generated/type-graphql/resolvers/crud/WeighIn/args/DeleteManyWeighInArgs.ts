import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeighInWhereInput } from "../../../inputs/WeighInWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWeighInArgs {
  @TypeGraphQL.Field(_type => WeighInWhereInput, {
    nullable: true
  })
  where?: WeighInWhereInput | undefined;
}
