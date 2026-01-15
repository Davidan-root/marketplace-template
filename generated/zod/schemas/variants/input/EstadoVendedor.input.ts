import * as z from 'zod';
// prettier-ignore
export const EstadoVendedorInputSchema = z.object({
    id: z.bigint(),
    descripcionEV: z.string(),
    nombreEV: z.string(),
    vendedores: z.array(z.unknown())
}).strict();

export type EstadoVendedorInputType = z.infer<typeof EstadoVendedorInputSchema>;
