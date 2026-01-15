import * as z from 'zod';
export const ResenaAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    comentario: z.number(),
    fechaHoraAlta: z.number(),
    puntaje: z.number(),
    productoId: z.number(),
    producto: z.number()
  }).optional(),
  _sum: z.object({
    id: z.bigint().nullable(),
    puntaje: z.number().nullable(),
    productoId: z.bigint().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    puntaje: z.number().nullable(),
    productoId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.bigint().nullable(),
    comentario: z.string().nullable(),
    fechaHoraAlta: z.date().nullable(),
    puntaje: z.number().int().nullable(),
    productoId: z.bigint().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.bigint().nullable(),
    comentario: z.string().nullable(),
    fechaHoraAlta: z.date().nullable(),
    puntaje: z.number().int().nullable(),
    productoId: z.bigint().nullable()
  }).nullable().optional()});