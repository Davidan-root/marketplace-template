import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductoUpdateWithoutResenasInputObjectSchema as ProductoUpdateWithoutResenasInputObjectSchema } from './ProductoUpdateWithoutResenasInput.schema';
import { ProductoUncheckedUpdateWithoutResenasInputObjectSchema as ProductoUncheckedUpdateWithoutResenasInputObjectSchema } from './ProductoUncheckedUpdateWithoutResenasInput.schema';
import { ProductoCreateWithoutResenasInputObjectSchema as ProductoCreateWithoutResenasInputObjectSchema } from './ProductoCreateWithoutResenasInput.schema';
import { ProductoUncheckedCreateWithoutResenasInputObjectSchema as ProductoUncheckedCreateWithoutResenasInputObjectSchema } from './ProductoUncheckedCreateWithoutResenasInput.schema';
import { ProductoWhereInputObjectSchema as ProductoWhereInputObjectSchema } from './ProductoWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductoUpdateWithoutResenasInputObjectSchema), z.lazy(() => ProductoUncheckedUpdateWithoutResenasInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductoCreateWithoutResenasInputObjectSchema), z.lazy(() => ProductoUncheckedCreateWithoutResenasInputObjectSchema)]),
  where: z.lazy(() => ProductoWhereInputObjectSchema).optional()
}).strict();
export const ProductoUpsertWithoutResenasInputObjectSchema: z.ZodType<Prisma.ProductoUpsertWithoutResenasInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUpsertWithoutResenasInput>;
export const ProductoUpsertWithoutResenasInputObjectZodSchema = makeSchema();
