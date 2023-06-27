import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z
    .string()
    .default(
      'postgres://ignite_nodejs_02_db_vpdm_user:JQOG1zPf9SusyS2xpUtpTCDFF8RtmxIE@dpg-cicuh3tph6em8s7rrdog-a/ignite_nodejs_02_db_vpdm',
    ),
  DATABASE_CLIENT: z.enum(['sqlite', 'pg']).default('pg'),
  PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)
if (_env.success === false) {
  console.error('Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables')
}
export const env = _env.data
