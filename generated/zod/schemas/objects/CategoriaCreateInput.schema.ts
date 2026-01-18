import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductoCreateNestedManyWithoutCategoriaInputObjectSchema as ProductoCreateNestedManyWithoutCategoriaInputObjectSchema } from './ProductoCreateNestedManyWithoutCategoriaInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionCategoria: z.string(),
  nombreCategoria: z.string(),
  productos: z.lazy(() => ProductoCreateNestedManyWithoutCategoriaInputObjectSchema).optional()
}).strict();
export const CategoriaCreateInputObjectSchema: z.ZodType<Prisma.CategoriaCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaCreateInput>;
export const CategoriaCreateInputObjectZodSchema = makeSchema();
