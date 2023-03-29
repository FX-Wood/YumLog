import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MealCreateManyInput } from "../../../inputs/MealCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMealArgs {
  @TypeGraphQL.Field(_type => [MealCreateManyInput], {
    nullable: false
  })
  data!: MealCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
