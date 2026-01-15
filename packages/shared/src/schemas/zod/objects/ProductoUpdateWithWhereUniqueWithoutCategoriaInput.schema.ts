import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductoWhereUniqueInputObjectSchema as ProductoWhereUniqueInputObjectSchema } from './ProductoWhereUniqueInput.schema';
import { ProductoUpdateWithoutCategoriaInputObjectSchema as ProductoUpdateWithoutCategoriaInputObjectSchema } from './ProductoUpdateWithoutCategoriaInput.schema';
import { ProductoUncheckedUpdateWithoutCategoriaInputObjectSchema as ProductoUncheckedUpdateWithoutCategoriaInputObjectSchema } from './ProductoUncheckedUpdateWithoutCategoriaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductoWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProductoUpdateWithoutCategoriaInputObjectSchema), z.lazy(() => ProductoUncheckedUpdateWithoutCategoriaInputObjectSchema)])
}).strict();
export const ProductoUpdateWithWhereUniqueWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.ProductoUpdateWithWhereUniqueWithoutCategoriaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUpdateWithWhereUniqueWithoutCategoriaInput>;
export const ProductoUpdateWithWhereUniqueWithoutCategoriaInputObjectZodSchema = makeSchema();
