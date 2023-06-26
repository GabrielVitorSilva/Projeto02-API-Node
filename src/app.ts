import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

export const app = fastify()

app.addHook('onResponse', async (request, reply) => {
  if (reply.statusCode === 500) {
    console.log(`Route not found`)
  }
})

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
