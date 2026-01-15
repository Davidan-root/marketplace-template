import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductoCreateWithoutResenasInputObjectSchema as ProductoCreateWithoutResenasInputObjectSchema } from './ProductoCreateWithoutResenasInput.schema';
import { ProductoUncheckedCreateWithoutResenasInputObjectSchema as ProductoUncheckedCreateWithoutResenasInputObjectSchema } from './ProductoUncheckedCreateWithoutResenasInput.schema';
import { ProductoCreateOrConnectWithoutResenasInputObjectSchema as ProductoCreateOrConnectWithoutResenasInputObjectSchema } from './ProductoCreateOrConnectWithoutResenasInput.schema';
import { ProductoWhereUniqueInputObjectSchema as ProductoWhereUniqueInputObjectSchema } from './ProductoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductoCreateWithoutResenasInputObjectSchema), z.lazy(() => ProductoUncheckedCreateWithoutResenasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductoCreateOrConnectWithoutResenasInputObjectSchema).optional(),
  connect: z.lazy(() => ProductoWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductoCreateNestedOneWithoutResenasInputObjectSchema: z.ZodType<Prisma.ProductoCreateNestedOneWithoutResenasInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoCreateNestedOneWithoutResenasInput>;
export const ProductoCreateNestedOneWithoutResenasInputObjectZodSchema = makeSchema();
