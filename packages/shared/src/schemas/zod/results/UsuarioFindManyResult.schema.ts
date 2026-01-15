import * as z from 'zod';
export const UsuarioFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});