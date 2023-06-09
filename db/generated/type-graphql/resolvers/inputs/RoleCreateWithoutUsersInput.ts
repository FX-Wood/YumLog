import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("RoleCreateWithoutUsersInput", {
  isAbstract: true
})
export class RoleCreateWithoutUsersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;
}
