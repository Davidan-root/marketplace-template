import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductoCountOutputTypeCountPublicacionesArgsObjectSchema as ProductoCountOutputTypeCountPublicacionesArgsObjectSchema } from './ProductoCountOutputTypeCountPublicacionesArgs.schema';
import { ProductoCountOutputTypeCountResenasArgsObjectSchema as ProductoCountOutputTypeCountResenasArgsObjectSchema } from './ProductoCountOutputTypeCountResenasArgs.schema'

const makeSchema = () => z.object({
  publicaciones: z.union([z.boolean(), z.lazy(() => ProductoCountOutputTypeCountPublicacionesArgsObjectSchema)]).optional(),
  resenas: z.union([z.boolean(), z.lazy(() => ProductoCountOutputTypeCountResenasArgsObjectSchema)]).optional()
}).strict();
export const ProductoCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProductoCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductoCountOutputTypeSelect>;
export const ProductoCountOutputTypeSelectObjectZodSchema = makeSchema();
