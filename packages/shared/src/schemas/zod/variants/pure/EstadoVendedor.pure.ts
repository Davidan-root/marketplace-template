import * as z from 'zod';
// prettier-ignore
export const EstadoVendedorModelSchema = z.object({
    id: z.bigint(),
    descripcionEV: z.string(),
    nombreEV: z.string(),
    vendedores: z.array(z.unknown())
}).strict();

export type EstadoVendedorPureType = z.infer<typeof EstadoVendedorModelSchema>;
