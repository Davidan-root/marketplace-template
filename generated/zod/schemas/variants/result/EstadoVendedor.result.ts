import * as z from 'zod';
// prettier-ignore
export const EstadoVendedorResultSchema = z.object({
    id: z.bigint(),
    descripcionEV: z.string(),
    nombreEV: z.string(),
    vendedores: z.array(z.unknown())
}).strict();

export type EstadoVendedorResultType = z.infer<typeof EstadoVendedorResultSchema>;
