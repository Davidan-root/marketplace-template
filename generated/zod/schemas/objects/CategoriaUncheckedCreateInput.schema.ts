import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductoUncheckedCreateNestedManyWithoutCategoriaInputObjectSchema as ProductoUncheckedCreateNestedManyWithoutCategoriaInputObjectSchema } from './ProductoUncheckedCreateNestedManyWithoutCategoriaInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionCategoria: z.string(),
  nombreCategoria: z.string(),
  productos: z.lazy(() => ProductoUncheckedCreateNestedManyWithoutCategoriaInputObjectSchema).optional()
}).strict();
export const CategoriaUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CategoriaUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaUncheckedCreateInput>;
export const CategoriaUncheckedCreateInputObjectZodSchema = makeSchema();
