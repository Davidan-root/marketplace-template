import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoArgsObjectSchema as CarritoArgsObjectSchema } from './CarritoArgs.schema';
import { PublicacionArgsObjectSchema as PublicacionArgsObjectSchema } from './PublicacionArgs.schema'

const makeSchema = () => z.object({
  carrito: z.union([z.boolean(), z.lazy(() => CarritoArgsObjectSchema)]).optional(),
  publicacion: z.union([z.boolean(), z.lazy(() => PublicacionArgsObjectSchema)]).optional()
}).strict();
export const CarritoItemIncludeObjectSchema: z.ZodType<Prisma.CarritoItemInclude> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemInclude>;
export const CarritoItemIncludeObjectZodSchema = makeSchema();
