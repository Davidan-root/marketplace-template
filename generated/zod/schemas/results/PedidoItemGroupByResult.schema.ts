import * as z from 'zod';
export const PedidoItemGroupByResultSchema = z.array(z.object({
  id: z.bigint(),
  cantidadPI: z.number().int(),
  precioUnitario: z.number(),
  subtotalPI: z.number(),
  pedidoId: z.bigint(),
  publicacionId: z.bigint(),
  _count: z.object({
    id: z.number(),
    cantidadPI: z.number(),
    precioUnitario: z.number(),
    subtotalPI: z.number(),
    pedidoId: z.number(),
    pedido: z.number(),
    publicacionId: z.number(),
    publicacion: z.number()
  }).optional(),
  _sum: z.object({
    id: z.bigint().nullable(),
    cantidadPI: z.number().nullable(),
    precioUnitario: z.number().nullable(),
    subtotalPI: z.number().nullable(),
    pedidoId: z.bigint().nullable(),
    publicacionId: z.bigint().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    cantidadPI: z.number().nullable(),
    precioUnitario: z.number().nullable(),
    subtotalPI: z.number().nullable(),
    pedidoId: z.number().nullable(),
    publicacionId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.bigint().nullable(),
    cantidadPI: z.number().int().nullable(),
    precioUnitario: z.number().nullable(),
    subtotalPI: z.number().nullable(),
    pedidoId: z.bigint().nullable(),
    publicacionId: z.bigint().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.bigint().nullable(),
    cantidadPI: z.number().int().nullable(),
    precioUnitario: z.number().nullable(),
    subtotalPI: z.number().nullable(),
    pedidoId: z.bigint().nullable(),
    publicacionId: z.bigint().nullable()
  }).nullable().optional()
}));