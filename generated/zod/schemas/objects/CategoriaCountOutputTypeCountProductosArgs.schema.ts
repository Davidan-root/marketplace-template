import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductoWhereInputObjectSchema as ProductoWhereInputObjectSchema } from './ProductoWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductoWhereInputObjectSchema).optional()
}).strict();
export const CategoriaCountOutputTypeCountProductosArgsObjectSchema = makeSchema();
export const CategoriaCountOutputTypeCountProductosArgsObjectZodSchema = makeSchema();
