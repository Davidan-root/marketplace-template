import * as z from 'zod';
export const UsuarioGroupByResultSchema = z.array(z.object({
  id: z.bigint(),
  direccionUsuario: z.string(),
  email: z.string(),
  nombreUsuario: z.string(),
  numeroContacto: z.string(),
  passwordHash: z.string(),
  estadoUsuarioId: z.bigint(),
  _count: z.object({
    id: z.number(),
    direccionUsuario: z.number(),
    email: z.number(),
    nombreUsuario: z.number(),
    numeroContacto: z.number(),
    passwordHash: z.number(),
    estadoUsuarioId: z.number(),
    estadoUsuario: z.number(),
    vendedor: z.number(),
    carritos: z.number(),
    pedidos: z.number()
  }).optional(),
  _sum: z.object({
    id: z.bigint().nullable(),
    estadoUsuarioId: z.bigint().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    estadoUsuarioId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.bigint().nullable(),
    direccionUsuario: z.string().nullable(),
    email: z.string().nullable(),
    nombreUsuario: z.string().nullable(),
    numeroContacto: z.string().nullable(),
    passwordHash: z.string().nullable(),
    estadoUsuarioId: z.bigint().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.bigint().nullable(),
    direccionUsuario: z.string().nullable(),
    email: z.string().nullable(),
    nombreUsuario: z.string().nullable(),
    numeroContacto: z.string().nullable(),
    passwordHash: z.string().nullable(),
    estadoUsuarioId: z.bigint().nullable()
  }).nullable().optional()
}));