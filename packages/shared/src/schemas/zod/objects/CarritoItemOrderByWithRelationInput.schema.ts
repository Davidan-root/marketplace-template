import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CarritoOrderByWithRelationInputObjectSchema as CarritoOrderByWithRelationInputObjectSchema } from './CarritoOrderByWithRelationInput.schema';
import { PublicacionOrderByWithRelationInputObjectSchema as PublicacionOrderByWithRelationInputObjectSchema } from './PublicacionOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cantidadCI: SortOrderSchema.optional(),
  carritoId: SortOrderSchema.optional(),
  publicacionId: SortOrderSchema.optional(),
  carrito: z.lazy(() => CarritoOrderByWithRelationInputObjectSchema).optional(),
  publicacion: z.lazy(() => PublicacionOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CarritoItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CarritoItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemOrderByWithRelationInput>;
export const CarritoItemOrderByWithRelationInputObjectZodSchema = makeSchema();
