import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductoWhereUniqueInputObjectSchema as ProductoWhereUniqueInputObjectSchema } from './ProductoWhereUniqueInput.schema';
import { ProductoUpdateWithoutCategoriaInputObjectSchema as ProductoUpdateWithoutCategoriaInputObjectSchema } from './ProductoUpdateWithoutCategoriaInput.schema';
import { ProductoUncheckedUpdateWithoutCategoriaInputObjectSchema as ProductoUncheckedUpdateWithoutCategoriaInputObjectSchema } from './ProductoUncheckedUpdateWithoutCategoriaInput.schema';
import { ProductoCreateWithoutCategoriaInputObjectSchema as ProductoCreateWithoutCategoriaInputObjectSchema } from './ProductoCreateWithoutCategoriaInput.schema';
import { ProductoUncheckedCreateWithoutCategoriaInputObjectSchema as ProductoUncheckedCreateWithoutCategoriaInputObjectSchema } from './ProductoUncheckedCreateWithoutCategoriaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductoWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProductoUpdateWithoutCategoriaInputObjectSchema), z.lazy(() => ProductoUncheckedUpdateWithoutCategoriaInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductoCreateWithoutCategoriaInputObjectSchema), z.lazy(() => ProductoUncheckedCreateWithoutCategoriaInputObjectSchema)])
}).strict();
export const ProductoUpsertWithWhereUniqueWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.ProductoUpsertWithWhereUniqueWithoutCategoriaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUpsertWithWhereUniqueWithoutCategoriaInput>;
export const ProductoUpsertWithWhereUniqueWithoutCategoriaInputObjectZodSchema = makeSchema();
