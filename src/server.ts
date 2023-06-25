import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

const app = fastify()

app.addHook('onResponse', async (request, reply) => {
  if (reply.statusCode === 500) {
    console.log(`Route not found`)
  }
})

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server Running!')
  })
  .catch((err) => {
    console.error(err)
  })
