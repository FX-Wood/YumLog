import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeighInCreateManyInput } from "../../../inputs/WeighInCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWeighInArgs {
  @TypeGraphQL.Field(_type => [WeighInCreateManyInput], {
    nullable: false
  })
  data!: WeighInCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
