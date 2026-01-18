import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UsuarioOrderByWithRelationInputObjectSchema as UsuarioOrderByWithRelationInputObjectSchema } from './UsuarioOrderByWithRelationInput.schema';
import { EstadoVendedorOrderByWithRelationInputObjectSchema as EstadoVendedorOrderByWithRelationInputObjectSchema } from './EstadoVendedorOrderByWithRelationInput.schema';
import { PublicacionOrderByRelationAggregateInputObjectSchema as PublicacionOrderByRelationAggregateInputObjectSchema } from './PublicacionOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  nombreTienda: SortOrderSchema.optional(),
  reputacion: SortOrderSchema.optional(),
  usuarioId: SortOrderSchema.optional(),
  estadoVendedorId: SortOrderSchema.optional(),
  usuario: z.lazy(() => UsuarioOrderByWithRelationInputObjectSchema).optional(),
  estadoVendedor: z.lazy(() => EstadoVendedorOrderByWithRelationInputObjectSchema).optional(),
  publicaciones: z.lazy(() => PublicacionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const VendedorOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.VendedorOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorOrderByWithRelationInput>;
export const VendedorOrderByWithRelationInputObjectZodSchema = makeSchema();
