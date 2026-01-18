import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductoWhereUniqueInputObjectSchema as ProductoWhereUniqueInputObjectSchema } from './ProductoWhereUniqueInput.schema';
import { ProductoCreateWithoutPublicacionesInputObjectSchema as ProductoCreateWithoutPublicacionesInputObjectSchema } from './ProductoCreateWithoutPublicacionesInput.schema';
import { ProductoUncheckedCreateWithoutPublicacionesInputObjectSchema as ProductoUncheckedCreateWithoutPublicacionesInputObjectSchema } from './ProductoUncheckedCreateWithoutPublicacionesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductoCreateWithoutPublicacionesInputObjectSchema), z.lazy(() => ProductoUncheckedCreateWithoutPublicacionesInputObjectSchema)])
}).strict();
export const ProductoCreateOrConnectWithoutPublicacionesInputObjectSchema: z.ZodType<Prisma.ProductoCreateOrConnectWithoutPublicacionesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoCreateOrConnectWithoutPublicacionesInput>;
export const ProductoCreateOrConnectWithoutPublicacionesInputObjectZodSchema = makeSchema();
