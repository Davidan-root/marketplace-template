import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductoWhereInputObjectSchema as ProductoWhereInputObjectSchema } from './ProductoWhereInput.schema';
import { ProductoUpdateWithoutPublicacionesInputObjectSchema as ProductoUpdateWithoutPublicacionesInputObjectSchema } from './ProductoUpdateWithoutPublicacionesInput.schema';
import { ProductoUncheckedUpdateWithoutPublicacionesInputObjectSchema as ProductoUncheckedUpdateWithoutPublicacionesInputObjectSchema } from './ProductoUncheckedUpdateWithoutPublicacionesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductoWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductoUpdateWithoutPublicacionesInputObjectSchema), z.lazy(() => ProductoUncheckedUpdateWithoutPublicacionesInputObjectSchema)])
}).strict();
export const ProductoUpdateToOneWithWhereWithoutPublicacionesInputObjectSchema: z.ZodType<Prisma.ProductoUpdateToOneWithWhereWithoutPublicacionesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUpdateToOneWithWhereWithoutPublicacionesInput>;
export const ProductoUpdateToOneWithWhereWithoutPublicacionesInputObjectZodSchema = makeSchema();
