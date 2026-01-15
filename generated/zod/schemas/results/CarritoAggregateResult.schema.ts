import * as z from 'zod';
export const CarritoAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    fechaHoraAlta: z.number(),
    fechaHoraBaja: z.number(),
    fechaHoraModificacion: z.number(),
    usuarioId: z.number(),
    usuario: z.number(),
    carritoItems: z.number()
  }).optional(),
  _sum: z.object({
    id: z.bigint().nullable(),
    usuarioId: z.bigint().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    usuarioId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.bigint().nullable(),
    fechaHoraAlta: z.date().nullable(),
    fechaHoraBaja: z.date().nullable(),
    fechaHoraModificacion: z.date().nullable(),
    usuarioId: z.bigint().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.bigint().nullable(),
    fechaHoraAlta: z.date().nullable(),
    fechaHoraBaja: z.date().nullable(),
    fechaHoraModificacion: z.date().nullable(),
    usuarioId: z.bigint().nullable()
  }).nullable().optional()});