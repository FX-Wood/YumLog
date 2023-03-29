import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MealCreateNestedManyWithoutUserInput } from "../inputs/MealCreateNestedManyWithoutUserInput";
import { ProfileCreateNestedOneWithoutUserInput } from "../inputs/ProfileCreateNestedOneWithoutUserInput";
import { RecipeCreateNestedManyWithoutUserInput } from "../inputs/RecipeCreateNestedManyWithoutUserInput";
import { WorkoutCreateNestedManyWithoutUserInput } from "../inputs/WorkoutCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutWeighInsInput", {
  isAbstract: true
})
export class UserCreateWithoutWeighInsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => ProfileCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  profile?: ProfileCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => MealCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  meals?: MealCreateNestedManyWithoutUserInput | undefined;

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
