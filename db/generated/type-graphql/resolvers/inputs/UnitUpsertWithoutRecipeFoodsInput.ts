import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateWithoutRecipeFoodsInput } from "../inputs/UnitCreateWithoutRecipeFoodsInput";
import { UnitUpdateWithoutRecipeFoodsInput } from "../inputs/UnitUpdateWithoutRecipeFoodsInput";

@TypeGraphQL.InputType("UnitUpsertWithoutRecipeFoodsInput", {
  isAbstract: true
})
export class UnitUpsertWithoutRecipeFoodsInput {
  @TypeGraphQL.Field(_type => UnitUpdateWithoutRecipeFoodsInput, {
    nullable: false
  })
  update!: UnitUpdateWithoutRecipeFoodsInput;

  @TypeGraphQL.Field(_type => UnitCreateWithoutRecipeFoodsInput, {
    nullable: false
  })
  create!: UnitCreateWithoutRecipeFoodsInput;
}
