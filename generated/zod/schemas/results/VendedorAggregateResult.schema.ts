import * as z from 'zod';
export const VendedorAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    nombreTienda: z.number(),
    reputacion: z.number(),
    usuarioId: z.number(),
    usuario: z.number(),
    estadoVendedorId: z.number(),
    estadoVendedor: z.number(),
    publicaciones: z.number()
  }).optional(),
  _sum: z.object({
    id: z.bigint().nullable(),
    reputacion: z.number().nullable(),
    usuarioId: z.bigint().nullable(),
    estadoVendedorId: z.bigint().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    reputacion: z.number().nullable(),
    usuarioId: z.number().nullable(),
    estadoVendedorId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.bigint().nullable(),
    nombreTienda: z.string().nullable(),
    reputacion: z.number().nullable(),
    usuarioId: z.bigint().nullable(),
    estadoVendedorId: z.bigint().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.bigint().nullable(),
    nombreTienda: z.string().nullable(),
    reputacion: z.number().nullable(),
    usuarioId: z.bigint().nullable(),
    estadoVendedorId: z.bigint().nullable()
  }).nullable().optional()});