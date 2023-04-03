import "reflect-metadata"
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import { ApolloServer } from '@apollo/server'
import Context from './context'
import { PrismaClient } from '@prisma/client'
import { resolvers } from '../db/generated/type-graphql'
import { buildSchema } from 'type-graphql'

async function serve() {
  const app = express()
  const httpServer = http.createServer(app)

  const schema = await buildSchema({ 
    resolvers,
    validate: false
  })
  const prisma = new PrismaClient()
  const server = new ApolloServer<Context>({
    schema: schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  })
  await server.start()
  
  app.use(
    bodyParser.json(),
    expressMiddleware(server, {
      context: async () => ({ prisma })
    })
  )
  
  httpServer.listen({ port: 4000 })

}

serve()
  .catch(e => {
    console.error(e)
  })
