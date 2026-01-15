import * as z from 'zod';
// prettier-ignore
export const VendedorResultSchema = z.object({
    id: z.bigint(),
    nombreTienda: z.string(),
    reputacion: z.number(),
    usuarioId: z.bigint(),
    usuario: z.unknown(),
    estadoVendedorId: z.bigint(),
    estadoVendedor: z.unknown(),
    publicaciones: z.array(z.unknown())
}).strict();

export type VendedorResultType = z.infer<typeof VendedorResultSchema>;
