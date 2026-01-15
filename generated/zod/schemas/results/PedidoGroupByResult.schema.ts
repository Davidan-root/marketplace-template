import * as z from 'zod';
export const PedidoGroupByResultSchema = z.array(z.object({
  id: z.bigint(),
  fechaHoraAlta: z.date(),
  numeroPedido: z.number().int(),
  totalPrecio: z.number(),
  usuarioId: z.bigint(),
  _count: z.object({
    id: z.number(),
    fechaHoraAlta: z.number(),
    numeroPedido: z.number(),
    totalPrecio: z.number(),
    usuarioId: z.number(),
    usuario: z.number(),
    pedidoItems: z.number(),
    pagos: z.number(),
    envio: z.number()
  }).optional(),
  _sum: z.object({
    id: z.bigint().nullable(),
    numeroPedido: z.number().nullable(),
    totalPrecio: z.number().nullable(),
    usuarioId: z.bigint().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    numeroPedido: z.number().nullable(),
    totalPrecio: z.number().nullable(),
    usuarioId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.bigint().nullable(),
    fechaHoraAlta: z.date().nullable(),
    numeroPedido: z.number().int().nullable(),
    totalPrecio: z.number().nullable(),
    usuarioId: z.bigint().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.bigint().nullable(),
    fechaHoraAlta: z.date().nullable(),
    numeroPedido: z.number().int().nullable(),
    totalPrecio: z.number().nullable(),
    usuarioId: z.bigint().nullable()
  }).nullable().optional()
}));