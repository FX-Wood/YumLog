import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkoutOrderByWithRelationInput } from "../../../inputs/WorkoutOrderByWithRelationInput";
import { WorkoutWhereInput } from "../../../inputs/WorkoutWhereInput";
import { WorkoutWhereUniqueInput } from "../../../inputs/WorkoutWhereUniqueInput";
import { WorkoutScalarFieldEnum } from "../../../../enums/WorkoutScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstWorkoutArgs {
  @TypeGraphQL.Field(_type => WorkoutWhereInput, {
    nullable: true
  })
  where?: WorkoutWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WorkoutOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: WorkoutOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkoutWhereUniqueInput, {
    nullable: true
  })
  cursor?: WorkoutWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [WorkoutScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "name" | "calories"> | undefined;
}
