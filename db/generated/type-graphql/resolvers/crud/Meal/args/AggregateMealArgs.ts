import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MealOrderByWithRelationInput } from "../../../inputs/MealOrderByWithRelationInput";
import { MealWhereInput } from "../../../inputs/MealWhereInput";
import { MealWhereUniqueInput } from "../../../inputs/MealWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMealArgs {
  @TypeGraphQL.Field(_type => MealWhereInput, {
    nullable: true
  })
  where?: MealWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MealOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MealOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MealWhereUniqueInput, {
    nullable: true
  })
  cursor?: MealWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
