import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MealListRelationFilter } from "../inputs/MealListRelationFilter";
import { ProfileRelationFilter } from "../inputs/ProfileRelationFilter";
import { RecipeListRelationFilter } from "../inputs/RecipeListRelationFilter";
import { RoleRelationFilter } from "../inputs/RoleRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { WeighInListRelationFilter } from "../inputs/WeighInListRelationFilter";
import { WorkoutListRelationFilter } from "../inputs/WorkoutListRelationFilter";

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  roleId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ProfileRelationFilter, {
    nullable: true
  })
  profile?: ProfileRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RoleRelationFilter, {
    nullable: true
  })
  role?: RoleRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MealListRelationFilter, {
    nullable: true
  })
  meals?: MealListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WeighInListRelationFilter, {
    nullable: true
  })
  weighIns?: WeighInListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WorkoutListRelationFilter, {
    nullable: true
  })
  workouts?: WorkoutListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RecipeListRelationFilter, {
    nullable: true
  })
  recipes?: RecipeListRelationFilter | undefined;
}
