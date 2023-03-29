import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeighInOrderByWithAggregationInput } from "../../../inputs/WeighInOrderByWithAggregationInput";
import { WeighInScalarWhereWithAggregatesInput } from "../../../inputs/WeighInScalarWhereWithAggregatesInput";
import { WeighInWhereInput } from "../../../inputs/WeighInWhereInput";
import { WeighInScalarFieldEnum } from "../../../../enums/WeighInScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWeighInArgs {
  @TypeGraphQL.Field(_type => WeighInWhereInput, {
    nullable: true
  })
  where?: WeighInWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WeighInOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: WeighInOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeighInScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "weight" | "createdAt">;

  @TypeGraphQL.Field(_type => WeighInScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: WeighInScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
