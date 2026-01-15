import * as z from 'zod';
export const EstadoUsuarioAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    descripcionEU: z.number(),
    nombreEU: z.number(),
    usuarios: z.number()
  }).optional(),
  _sum: z.object({
    id: z.bigint().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.bigint().nullable(),
    descripcionEU: z.string().nullable(),
    nombreEU: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.bigint().nullable(),
    descripcionEU: z.string().nullable(),
    nombreEU: z.string().nullable()
  }).nullable().optional()});