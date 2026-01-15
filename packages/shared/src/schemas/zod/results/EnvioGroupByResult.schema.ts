import * as z from 'zod';
export const EnvioGroupByResultSchema = z.array(z.object({
  id: z.bigint(),
  estadoEnvio: z.string(),
  numeroEnvio: z.number().int(),
  pedidoId: z.bigint(),
  _count: z.object({
    id: z.number(),
    estadoEnvio: z.number(),
    numeroEnvio: z.number(),
    pedidoId: z.number(),
    pedido: z.number()
  }).optional(),
  _sum: z.object({
    id: z.bigint().nullable(),
    numeroEnvio: z.number().nullable(),
    pedidoId: z.bigint().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    numeroEnvio: z.number().nullable(),
    pedidoId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.bigint().nullable(),
    estadoEnvio: z.string().nullable(),
    numeroEnvio: z.number().int().nullable(),
    pedidoId: z.bigint().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.bigint().nullable(),
    estadoEnvio: z.string().nullable(),
    numeroEnvio: z.number().int().nullable(),
    pedidoId: z.bigint().nullable()
  }).nullable().optional()
}));