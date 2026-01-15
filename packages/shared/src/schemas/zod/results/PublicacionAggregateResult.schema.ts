import * as z from 'zod';
export const PublicacionAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    condicionesVenta: z.number(),
    enviosVenta: z.number(),
    precioVenta: z.number(),
    stockVenta: z.number(),
    vendedorId: z.number(),
    vendedor: z.number(),
    productoId: z.number(),
    producto: z.number(),
    carritoItems: z.number(),
    pedidoItems: z.number()
  }).optional(),
  _sum: z.object({
    id: z.bigint().nullable(),
    precioVenta: z.number().nullable(),
    stockVenta: z.number().nullable(),
    vendedorId: z.bigint().nullable(),
    productoId: z.bigint().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    precioVenta: z.number().nullable(),
    stockVenta: z.number().nullable(),
    vendedorId: z.number().nullable(),
    productoId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.bigint().nullable(),
    condicionesVenta: z.string().nullable(),
    precioVenta: z.number().nullable(),
    stockVenta: z.number().int().nullable(),
    vendedorId: z.bigint().nullable(),
    productoId: z.bigint().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.bigint().nullable(),
    condicionesVenta: z.string().nullable(),
    precioVenta: z.number().nullable(),
    stockVenta: z.number().int().nullable(),
    vendedorId: z.bigint().nullable(),
    productoId: z.bigint().nullable()
  }).nullable().optional()});