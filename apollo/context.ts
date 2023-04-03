import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { User } from '../db/generated/type-graphql/models/User'

interface Context {
  prisma: PrismaClient
  req?: Request
  res?: Response
  user?: Partial<User>
}

export default Context
