import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductoScalarWhereInputObjectSchema as ProductoScalarWhereInputObjectSchema } from './ProductoScalarWhereInput.schema';
import { ProductoUpdateManyMutationInputObjectSchema as ProductoUpdateManyMutationInputObjectSchema } from './ProductoUpdateManyMutationInput.schema';
import { ProductoUncheckedUpdateManyWithoutCategoriaInputObjectSchema as ProductoUncheckedUpdateManyWithoutCategoriaInputObjectSchema } from './ProductoUncheckedUpdateManyWithoutCategoriaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductoScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProductoUpdateManyMutationInputObjectSchema), z.lazy(() => ProductoUncheckedUpdateManyWithoutCategoriaInputObjectSchema)])
}).strict();
export const ProductoUpdateManyWithWhereWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.ProductoUpdateManyWithWhereWithoutCategoriaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUpdateManyWithWhereWithoutCategoriaInput>;
export const ProductoUpdateManyWithWhereWithoutCategoriaInputObjectZodSchema = makeSchema();
