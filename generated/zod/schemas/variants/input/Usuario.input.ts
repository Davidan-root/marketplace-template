import * as z from 'zod';
// prettier-ignore
export const UsuarioInputSchema = z.object({
    id: z.bigint(),
    direccionUsuario: z.string(),
    email: z.string(),
    nombreUsuario: z.string(),
    numeroContacto: z.string(),
    passwordHash: z.string(),
    estadoUsuarioId: z.bigint(),
    estadoUsuario: z.unknown(),
    vendedor: z.unknown().optional().nullable(),
    carritos: z.array(z.unknown()),
    pedidos: z.array(z.unknown())
}).strict();

export type UsuarioInputType = z.infer<typeof UsuarioInputSchema>;
