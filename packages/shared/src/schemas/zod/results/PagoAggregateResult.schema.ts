import * as z from 'zod';
export const PagoAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    metodoPago: z.number(),
    monto: z.number(),
    pedidoId: z.number(),
    pedido: z.number()
  }).optional(),
  _sum: z.object({
    id: z.bigint().nullable(),
    monto: z.number().nullable(),
    pedidoId: z.bigint().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    monto: z.number().nullable(),
    pedidoId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.bigint().nullable(),
    metodoPago: z.string().nullable(),
    monto: z.number().nullable(),
    pedidoId: z.bigint().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.bigint().nullable(),
    metodoPago: z.string().nullable(),
    monto: z.number().nullable(),
    pedidoId: z.bigint().nullable()
  }).nullable().optional()});