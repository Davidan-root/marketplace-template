import * as z from 'zod';
export const ProductoAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    descripcionProducto: z.number(),
    nombreProducto: z.number(),
    categoriaId: z.number(),
    categoria: z.number(),
    publicaciones: z.number(),
    resenas: z.number()
  }).optional(),
  _sum: z.object({
    id: z.bigint().nullable(),
    categoriaId: z.bigint().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    categoriaId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.bigint().nullable(),
    descripcionProducto: z.string().nullable(),
    nombreProducto: z.string().nullable(),
    categoriaId: z.bigint().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.bigint().nullable(),
    descripcionProducto: z.string().nullable(),
    nombreProducto: z.string().nullable(),
    categoriaId: z.bigint().nullable()
  }).nullable().optional()});