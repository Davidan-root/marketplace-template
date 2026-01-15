import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoArgsObjectSchema as CarritoArgsObjectSchema } from './CarritoArgs.schema';
import { PublicacionArgsObjectSchema as PublicacionArgsObjectSchema } from './PublicacionArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  cantidadCI: z.boolean().optional(),
  carritoId: z.boolean().optional(),
  carrito: z.union([z.boolean(), z.lazy(() => CarritoArgsObjectSchema)]).optional(),
  publicacionId: z.boolean().optional(),
  publicacion: z.union([z.boolean(), z.lazy(() => PublicacionArgsObjectSchema)]).optional()
}).strict();
export const CarritoItemSelectObjectSchema: z.ZodType<Prisma.CarritoItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemSelect>;
export const CarritoItemSelectObjectZodSchema = makeSchema();
