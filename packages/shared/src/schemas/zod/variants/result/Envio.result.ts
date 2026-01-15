import * as z from 'zod';
// prettier-ignore
export const EnvioResultSchema = z.object({
    id: z.bigint(),
    estadoEnvio: z.string(),
    numeroEnvio: z.number().int(),
    pedidoId: z.bigint(),
    pedido: z.unknown()
}).strict();

export type EnvioResultType = z.infer<typeof EnvioResultSchema>;
