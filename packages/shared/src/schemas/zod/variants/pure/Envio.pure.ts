import * as z from 'zod';
// prettier-ignore
export const EnvioModelSchema = z.object({
    id: z.bigint(),
    estadoEnvio: z.string(),
    numeroEnvio: z.number().int(),
    pedidoId: z.bigint(),
    pedido: z.unknown()
}).strict();

export type EnvioPureType = z.infer<typeof EnvioModelSchema>;
