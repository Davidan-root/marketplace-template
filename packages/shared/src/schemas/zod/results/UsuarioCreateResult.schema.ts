import * as z from 'zod';
export const UsuarioCreateResultSchema = z.object({
  id: z.bigint(),
  direccionUsuario: z.string(),
  email: z.string(),
  nombreUsuario: z.string(),
  numeroContacto: z.string(),
  passwordHash: z.string(),
  estadoUsuarioId: z.bigint(),
  estadoUsuario: z.unknown(),
  vendedor: z.unknown().optional(),
  carritos: z.array(z.unknown()),
  pedidos: z.array(z.unknown())
});