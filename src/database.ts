import { knex as setupKnex } from 'knex'

// eslint-disable-next-line no-unused-vars
export const knex = setupKnex({
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
})
