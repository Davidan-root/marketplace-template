import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductoWhereUniqueInputObjectSchema as ProductoWhereUniqueInputObjectSchema } from './ProductoWhereUniqueInput.schema';
import { ProductoCreateWithoutCategoriaInputObjectSchema as ProductoCreateWithoutCategoriaInputObjectSchema } from './ProductoCreateWithoutCategoriaInput.schema';
import { ProductoUncheckedCreateWithoutCategoriaInputObjectSchema as ProductoUncheckedCreateWithoutCategoriaInputObjectSchema } from './ProductoUncheckedCreateWithoutCategoriaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductoCreateWithoutCategoriaInputObjectSchema), z.lazy(() => ProductoUncheckedCreateWithoutCategoriaInputObjectSchema)])
}).strict();
export const ProductoCreateOrConnectWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.ProductoCreateOrConnectWithoutCategoriaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoCreateOrConnectWithoutCategoriaInput>;
export const ProductoCreateOrConnectWithoutCategoriaInputObjectZodSchema = makeSchema();
