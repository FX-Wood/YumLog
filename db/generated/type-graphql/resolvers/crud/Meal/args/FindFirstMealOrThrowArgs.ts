import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MealOrderByWithRelationInput } from "../../../inputs/MealOrderByWithRelationInput";
import { MealWhereInput } from "../../../inputs/MealWhereInput";
import { MealWhereUniqueInput } from "../../../inputs/MealWhereUniqueInput";
import { MealScalarFieldEnum } from "../../../../enums/MealScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMealOrThrowArgs {
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

  @TypeGraphQL.Field(_type => [MealScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "mealType"> | undefined;
}
