import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealOrderByRelationAggregateInput } from "../inputs/MealOrderByRelationAggregateInput";
import { ProfileOrderByWithRelationInput } from "../inputs/ProfileOrderByWithRelationInput";
import { RecipeOrderByRelationAggregateInput } from "../inputs/RecipeOrderByRelationAggregateInput";
import { WeighInOrderByRelationAggregateInput } from "../inputs/WeighInOrderByRelationAggregateInput";
import { WorkoutOrderByRelationAggregateInput } from "../inputs/WorkoutOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProfileOrderByWithRelationInput, {
    nullable: true
  })
  profile?: ProfileOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MealOrderByRelationAggregateInput, {
    nullable: true
  })
  meals?: MealOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WeighInOrderByRelationAggregateInput, {
    nullable: true
  })
  weighIns?: WeighInOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkoutOrderByRelationAggregateInput, {
    nullable: true
  })
  workouts?: WorkoutOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RecipeOrderByRelationAggregateInput, {
    nullable: true
  })
  recipes?: RecipeOrderByRelationAggregateInput | undefined;
}
