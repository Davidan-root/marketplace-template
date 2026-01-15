import * as z from 'zod';
// prettier-ignore
export const VendedorModelSchema = z.object({
    id: z.bigint(),
    nombreTienda: z.string(),
    reputacion: z.number(),
    usuarioId: z.bigint(),
    usuario: z.unknown(),
    estadoVendedorId: z.bigint(),
    estadoVendedor: z.unknown(),
    publicaciones: z.array(z.unknown())
}).strict();

export type VendedorPureType = z.infer<typeof VendedorModelSchema>;
