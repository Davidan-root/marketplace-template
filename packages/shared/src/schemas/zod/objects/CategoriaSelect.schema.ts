import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductoFindManySchema as ProductoFindManySchema } from '../findManyProducto.schema';
import { CategoriaCountOutputTypeArgsObjectSchema as CategoriaCountOutputTypeArgsObjectSchema } from './CategoriaCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  descripcionCategoria: z.boolean().optional(),
  nombreCategoria: z.boolean().optional(),
  productos: z.union([z.boolean(), z.lazy(() => ProductoFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CategoriaCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CategoriaSelectObjectSchema: z.ZodType<Prisma.CategoriaSelect> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaSelect>;
export const CategoriaSelectObjectZodSchema = makeSchema();
