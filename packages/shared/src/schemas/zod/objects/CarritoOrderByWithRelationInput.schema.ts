import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UsuarioOrderByWithRelationInputObjectSchema as UsuarioOrderByWithRelationInputObjectSchema } from './UsuarioOrderByWithRelationInput.schema';
import { CarritoItemOrderByRelationAggregateInputObjectSchema as CarritoItemOrderByRelationAggregateInputObjectSchema } from './CarritoItemOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  fechaHoraAlta: SortOrderSchema.optional(),
  fechaHoraBaja: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  fechaHoraModificacion: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  usuarioId: SortOrderSchema.optional(),
  usuario: z.lazy(() => UsuarioOrderByWithRelationInputObjectSchema).optional(),
  carritoItems: z.lazy(() => CarritoItemOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CarritoOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CarritoOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoOrderByWithRelationInput>;
export const CarritoOrderByWithRelationInputObjectZodSchema = makeSchema();
