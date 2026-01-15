import * as z from 'zod';
export const EnvioDeleteResultSchema = z.nullable(z.object({
  id: z.bigint(),
  estadoEnvio: z.string(),
  numeroEnvio: z.number().int(),
  pedidoId: z.bigint(),
  pedido: z.unknown()
}));