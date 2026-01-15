import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductoCreateWithoutResenasInputObjectSchema as ProductoCreateWithoutResenasInputObjectSchema } from './ProductoCreateWithoutResenasInput.schema';
import { ProductoUncheckedCreateWithoutResenasInputObjectSchema as ProductoUncheckedCreateWithoutResenasInputObjectSchema } from './ProductoUncheckedCreateWithoutResenasInput.schema';
import { ProductoCreateOrConnectWithoutResenasInputObjectSchema as ProductoCreateOrConnectWithoutResenasInputObjectSchema } from './ProductoCreateOrConnectWithoutResenasInput.schema';
import { ProductoUpsertWithoutResenasInputObjectSchema as ProductoUpsertWithoutResenasInputObjectSchema } from './ProductoUpsertWithoutResenasInput.schema';
import { ProductoWhereUniqueInputObjectSchema as ProductoWhereUniqueInputObjectSchema } from './ProductoWhereUniqueInput.schema';
import { ProductoUpdateToOneWithWhereWithoutResenasInputObjectSchema as ProductoUpdateToOneWithWhereWithoutResenasInputObjectSchema } from './ProductoUpdateToOneWithWhereWithoutResenasInput.schema';
import { ProductoUpdateWithoutResenasInputObjectSchema as ProductoUpdateWithoutResenasInputObjectSchema } from './ProductoUpdateWithoutResenasInput.schema';
import { ProductoUncheckedUpdateWithoutResenasInputObjectSchema as ProductoUncheckedUpdateWithoutResenasInputObjectSchema } from './ProductoUncheckedUpdateWithoutResenasInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductoCreateWithoutResenasInputObjectSchema), z.lazy(() => ProductoUncheckedCreateWithoutResenasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductoCreateOrConnectWithoutResenasInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductoUpsertWithoutResenasInputObjectSchema).optional(),
  connect: z.lazy(() => ProductoWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductoUpdateToOneWithWhereWithoutResenasInputObjectSchema), z.lazy(() => ProductoUpdateWithoutResenasInputObjectSchema), z.lazy(() => ProductoUncheckedUpdateWithoutResenasInputObjectSchema)]).optional()
}).strict();
export const ProductoUpdateOneRequiredWithoutResenasNestedInputObjectSchema: z.ZodType<Prisma.ProductoUpdateOneRequiredWithoutResenasNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUpdateOneRequiredWithoutResenasNestedInput>;
export const ProductoUpdateOneRequiredWithoutResenasNestedInputObjectZodSchema = makeSchema();
