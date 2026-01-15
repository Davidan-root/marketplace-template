import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductoWhereInputObjectSchema as ProductoWhereInputObjectSchema } from './ProductoWhereInput.schema';
import { ProductoUpdateWithoutResenasInputObjectSchema as ProductoUpdateWithoutResenasInputObjectSchema } from './ProductoUpdateWithoutResenasInput.schema';
import { ProductoUncheckedUpdateWithoutResenasInputObjectSchema as ProductoUncheckedUpdateWithoutResenasInputObjectSchema } from './ProductoUncheckedUpdateWithoutResenasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductoWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductoUpdateWithoutResenasInputObjectSchema), z.lazy(() => ProductoUncheckedUpdateWithoutResenasInputObjectSchema)])
}).strict();
export const ProductoUpdateToOneWithWhereWithoutResenasInputObjectSchema: z.ZodType<Prisma.ProductoUpdateToOneWithWhereWithoutResenasInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUpdateToOneWithWhereWithoutResenasInput>;
export const ProductoUpdateToOneWithWhereWithoutResenasInputObjectZodSchema = makeSchema();
