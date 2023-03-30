import { buildSchema } from 'type-graphql'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { PrismaClient } from '@prisma/client'

import { resolvers } from '../db/generated/type-graphql'

interface Context {
  prisma: PrismaClient
}

async function serve() {
  const schema = await buildSchema({ 
    resolvers,
    validate: false
  })
  const prisma = new PrismaClient()
  const server = new ApolloServer({
    schema,
    context: (): Context => ({ prisma }),
  })
  const { port } = await server.listen(3001)
  console.log(`Apollo server is listening on ${port}`)
}


