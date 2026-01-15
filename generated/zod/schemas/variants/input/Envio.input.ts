import * as z from 'zod';
// prettier-ignore
export const EnvioInputSchema = z.object({
    id: z.bigint(),
    estadoEnvio: z.string(),
    numeroEnvio: z.number().int(),
    pedidoId: z.bigint(),
    pedido: z.unknown()
}).strict();

export type EnvioInputType = z.infer<typeof EnvioInputSchema>;
