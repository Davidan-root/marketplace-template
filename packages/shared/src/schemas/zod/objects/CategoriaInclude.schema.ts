import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductoFindManySchema as ProductoFindManySchema } from '../findManyProducto.schema';
import { CategoriaCountOutputTypeArgsObjectSchema as CategoriaCountOutputTypeArgsObjectSchema } from './CategoriaCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  productos: z.union([z.boolean(), z.lazy(() => ProductoFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CategoriaCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CategoriaIncludeObjectSchema: z.ZodType<Prisma.CategoriaInclude> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaInclude>;
export const CategoriaIncludeObjectZodSchema = makeSchema();
