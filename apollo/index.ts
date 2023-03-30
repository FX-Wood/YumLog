import "reflect-metadata"
import { resolvers } from '../db/generated/type-graphql'
import { buildSchema } from 'type-graphql'
import { PrismaClient } from '@prisma/client'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// see https://www.apollographql.com/docs/apollo-server/api/standalone/
interface MyContext {
  prisma: PrismaClient
}

async function serve() {
  const schema = await buildSchema({ 
    resolvers,
    validate: false
  })
  const prisma = new PrismaClient()
  const server = new ApolloServer<MyContext>({
    schema: schema
  })
  const { url } = await startStandaloneServer(server, { 
    listen: { port: 4000 },
    context: async () => ({ prisma })
  })
  console.log(`Apollo server: ${url}`)
}

serve()
  .catch(e => {
    console.error(e)
  })
