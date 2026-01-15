import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductoCreateWithoutPublicacionesInputObjectSchema as ProductoCreateWithoutPublicacionesInputObjectSchema } from './ProductoCreateWithoutPublicacionesInput.schema';
import { ProductoUncheckedCreateWithoutPublicacionesInputObjectSchema as ProductoUncheckedCreateWithoutPublicacionesInputObjectSchema } from './ProductoUncheckedCreateWithoutPublicacionesInput.schema';
import { ProductoCreateOrConnectWithoutPublicacionesInputObjectSchema as ProductoCreateOrConnectWithoutPublicacionesInputObjectSchema } from './ProductoCreateOrConnectWithoutPublicacionesInput.schema';
import { ProductoUpsertWithoutPublicacionesInputObjectSchema as ProductoUpsertWithoutPublicacionesInputObjectSchema } from './ProductoUpsertWithoutPublicacionesInput.schema';
import { ProductoWhereUniqueInputObjectSchema as ProductoWhereUniqueInputObjectSchema } from './ProductoWhereUniqueInput.schema';
import { ProductoUpdateToOneWithWhereWithoutPublicacionesInputObjectSchema as ProductoUpdateToOneWithWhereWithoutPublicacionesInputObjectSchema } from './ProductoUpdateToOneWithWhereWithoutPublicacionesInput.schema';
import { ProductoUpdateWithoutPublicacionesInputObjectSchema as ProductoUpdateWithoutPublicacionesInputObjectSchema } from './ProductoUpdateWithoutPublicacionesInput.schema';
import { ProductoUncheckedUpdateWithoutPublicacionesInputObjectSchema as ProductoUncheckedUpdateWithoutPublicacionesInputObjectSchema } from './ProductoUncheckedUpdateWithoutPublicacionesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductoCreateWithoutPublicacionesInputObjectSchema), z.lazy(() => ProductoUncheckedCreateWithoutPublicacionesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductoCreateOrConnectWithoutPublicacionesInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductoUpsertWithoutPublicacionesInputObjectSchema).optional(),
  connect: z.lazy(() => ProductoWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductoUpdateToOneWithWhereWithoutPublicacionesInputObjectSchema), z.lazy(() => ProductoUpdateWithoutPublicacionesInputObjectSchema), z.lazy(() => ProductoUncheckedUpdateWithoutPublicacionesInputObjectSchema)]).optional()
}).strict();
export const ProductoUpdateOneRequiredWithoutPublicacionesNestedInputObjectSchema: z.ZodType<Prisma.ProductoUpdateOneRequiredWithoutPublicacionesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUpdateOneRequiredWithoutPublicacionesNestedInput>;
export const ProductoUpdateOneRequiredWithoutPublicacionesNestedInputObjectZodSchema = makeSchema();
