import * as z from 'zod';
// prettier-ignore
export const UsuarioModelSchema = z.object({
    id: z.bigint(),
    direccionUsuario: z.string(),
    email: z.string(),
    nombreUsuario: z.string(),
    numeroContacto: z.string(),
    passwordHash: z.string(),
    estadoUsuarioId: z.bigint(),
    estadoUsuario: z.unknown(),
    vendedor: z.unknown().nullable(),
    carritos: z.array(z.unknown()),
    pedidos: z.array(z.unknown())
}).strict();

export type UsuarioPureType = z.infer<typeof UsuarioModelSchema>;
