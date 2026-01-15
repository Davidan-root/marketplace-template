import * as z from 'zod';
export const CategoriaAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    descripcionCategoria: z.number(),
    nombreCategoria: z.number(),
    productos: z.number()
  }).optional(),
  _sum: z.object({
    id: z.bigint().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.bigint().nullable(),
    descripcionCategoria: z.string().nullable(),
    nombreCategoria: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.bigint().nullable(),
    descripcionCategoria: z.string().nullable(),
    nombreCategoria: z.string().nullable()
  }).nullable().optional()});