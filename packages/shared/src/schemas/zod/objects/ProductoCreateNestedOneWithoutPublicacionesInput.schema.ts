import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductoCreateWithoutPublicacionesInputObjectSchema as ProductoCreateWithoutPublicacionesInputObjectSchema } from './ProductoCreateWithoutPublicacionesInput.schema';
import { ProductoUncheckedCreateWithoutPublicacionesInputObjectSchema as ProductoUncheckedCreateWithoutPublicacionesInputObjectSchema } from './ProductoUncheckedCreateWithoutPublicacionesInput.schema';
import { ProductoCreateOrConnectWithoutPublicacionesInputObjectSchema as ProductoCreateOrConnectWithoutPublicacionesInputObjectSchema } from './ProductoCreateOrConnectWithoutPublicacionesInput.schema';
import { ProductoWhereUniqueInputObjectSchema as ProductoWhereUniqueInputObjectSchema } from './ProductoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductoCreateWithoutPublicacionesInputObjectSchema), z.lazy(() => ProductoUncheckedCreateWithoutPublicacionesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductoCreateOrConnectWithoutPublicacionesInputObjectSchema).optional(),
  connect: z.lazy(() => ProductoWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductoCreateNestedOneWithoutPublicacionesInputObjectSchema: z.ZodType<Prisma.ProductoCreateNestedOneWithoutPublicacionesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoCreateNestedOneWithoutPublicacionesInput>;
export const ProductoCreateNestedOneWithoutPublicacionesInputObjectZodSchema = makeSchema();
