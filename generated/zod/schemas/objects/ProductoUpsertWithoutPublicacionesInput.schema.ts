import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductoUpdateWithoutPublicacionesInputObjectSchema as ProductoUpdateWithoutPublicacionesInputObjectSchema } from './ProductoUpdateWithoutPublicacionesInput.schema';
import { ProductoUncheckedUpdateWithoutPublicacionesInputObjectSchema as ProductoUncheckedUpdateWithoutPublicacionesInputObjectSchema } from './ProductoUncheckedUpdateWithoutPublicacionesInput.schema';
import { ProductoCreateWithoutPublicacionesInputObjectSchema as ProductoCreateWithoutPublicacionesInputObjectSchema } from './ProductoCreateWithoutPublicacionesInput.schema';
import { ProductoUncheckedCreateWithoutPublicacionesInputObjectSchema as ProductoUncheckedCreateWithoutPublicacionesInputObjectSchema } from './ProductoUncheckedCreateWithoutPublicacionesInput.schema';
import { ProductoWhereInputObjectSchema as ProductoWhereInputObjectSchema } from './ProductoWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductoUpdateWithoutPublicacionesInputObjectSchema), z.lazy(() => ProductoUncheckedUpdateWithoutPublicacionesInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductoCreateWithoutPublicacionesInputObjectSchema), z.lazy(() => ProductoUncheckedCreateWithoutPublicacionesInputObjectSchema)]),
  where: z.lazy(() => ProductoWhereInputObjectSchema).optional()
}).strict();
export const ProductoUpsertWithoutPublicacionesInputObjectSchema: z.ZodType<Prisma.ProductoUpsertWithoutPublicacionesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUpsertWithoutPublicacionesInput>;
export const ProductoUpsertWithoutPublicacionesInputObjectZodSchema = makeSchema();
