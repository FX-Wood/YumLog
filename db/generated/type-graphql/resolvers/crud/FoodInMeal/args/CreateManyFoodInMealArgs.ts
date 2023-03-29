import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodInMealCreateManyInput } from "../../../inputs/FoodInMealCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFoodInMealArgs {
  @TypeGraphQL.Field(_type => [FoodInMealCreateManyInput], {
    nullable: false
  })
  data!: FoodInMealCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
