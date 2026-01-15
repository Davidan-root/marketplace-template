import * as z from 'zod';
export const EnvioFindFirstResultSchema = z.nullable(z.object({
  id: z.bigint(),
  estadoEnvio: z.string(),
  numeroEnvio: z.number().int(),
  pedidoId: z.bigint(),
  pedido: z.unknown()
}));