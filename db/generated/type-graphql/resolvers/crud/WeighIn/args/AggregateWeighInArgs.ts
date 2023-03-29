import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeighInOrderByWithRelationInput } from "../../../inputs/WeighInOrderByWithRelationInput";
import { WeighInWhereInput } from "../../../inputs/WeighInWhereInput";
import { WeighInWhereUniqueInput } from "../../../inputs/WeighInWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateWeighInArgs {
  @TypeGraphQL.Field(_type => WeighInWhereInput, {
    nullable: true
  })
  where?: WeighInWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WeighInOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: WeighInOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => WeighInWhereUniqueInput, {
    nullable: true
  })
  cursor?: WeighInWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
