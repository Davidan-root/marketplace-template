import * as z from 'zod';

export const EnvioScalarFieldEnumSchema = z.enum(['id', 'estadoEnvio', 'numeroEnvio', 'pedidoId'])

export type EnvioScalarFieldEnum = z.infer<typeof EnvioScalarFieldEnumSchema>;