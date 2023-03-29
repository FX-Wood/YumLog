import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateWithoutRecipeFoodsInput } from "../inputs/UnitCreateWithoutRecipeFoodsInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitCreateOrConnectWithoutRecipeFoodsInput", {
  isAbstract: true
})
export class UnitCreateOrConnectWithoutRecipeFoodsInput {
  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: false
  })
  where!: UnitWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnitCreateWithoutRecipeFoodsInput, {
    nullable: false
  })
  create!: UnitCreateWithoutRecipeFoodsInput;
}
