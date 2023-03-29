import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealCreateNestedManyWithoutUserInput } from "../inputs/MealCreateNestedManyWithoutUserInput";
import { RecipeCreateNestedManyWithoutUserInput } from "../inputs/RecipeCreateNestedManyWithoutUserInput";
import { WeighInCreateNestedManyWithoutUserInput } from "../inputs/WeighInCreateNestedManyWithoutUserInput";
import { WorkoutCreateNestedManyWithoutUserInput } from "../inputs/WorkoutCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutProfileInput", {
  isAbstract: true
})
export class UserCreateWithoutProfileInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => MealCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  meals?: MealCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => WeighInCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  weighIns?: WeighInCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => WorkoutCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  workouts?: WorkoutCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => RecipeCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  recipes?: RecipeCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}