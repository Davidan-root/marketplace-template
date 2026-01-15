import * as z from 'zod';
export const EstadoVendedorGroupByResultSchema = z.array(z.object({
  id: z.bigint(),
  descripcionEV: z.string(),
  nombreEV: z.string(),
  _count: z.object({
    id: z.number(),
    descripcionEV: z.number(),
    nombreEV: z.number(),
    vendedores: z.number()
  }).optional(),
  _sum: z.object({
    id: z.bigint().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.bigint().nullable(),
    descripcionEV: z.string().nullable(),
    nombreEV: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.bigint().nullable(),
    descripcionEV: z.string().nullable(),
    nombreEV: z.string().nullable()
  }).nullable().optional()
}));