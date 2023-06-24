import { knex as setupKnex, Knex } from 'knex'
import { env } from '../env'

// eslint-disable-next-line no-unused-vars
export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}
export const knex = setupKnex(config)
