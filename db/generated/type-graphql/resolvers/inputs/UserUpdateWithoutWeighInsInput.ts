import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MealUpdateManyWithoutUserNestedInput } from "../inputs/MealUpdateManyWithoutUserNestedInput";
import { ProfileUpdateOneWithoutUserNestedInput } from "../inputs/ProfileUpdateOneWithoutUserNestedInput";
import { RecipeUpdateManyWithoutUserNestedInput } from "../inputs/RecipeUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WorkoutUpdateManyWithoutUserNestedInput } from "../inputs/WorkoutUpdateManyWithoutUserNestedInput";

@TypeGraphQL.InputType("UserUpdateWithoutWeighInsInput", {
  isAbstract: true
})
export class UserUpdateWithoutWeighInsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProfileUpdateOneWithoutUserNestedInput, {
    nullable: true
  })
  profile?: ProfileUpdateOneWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => MealUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  meals?: MealUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => WorkoutUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  workouts?: WorkoutUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => RecipeUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  recipes?: RecipeUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
