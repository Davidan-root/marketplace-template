import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductoCreateWithoutCategoriaInputObjectSchema as ProductoCreateWithoutCategoriaInputObjectSchema } from './ProductoCreateWithoutCategoriaInput.schema';
import { ProductoUncheckedCreateWithoutCategoriaInputObjectSchema as ProductoUncheckedCreateWithoutCategoriaInputObjectSchema } from './ProductoUncheckedCreateWithoutCategoriaInput.schema';
import { ProductoCreateOrConnectWithoutCategoriaInputObjectSchema as ProductoCreateOrConnectWithoutCategoriaInputObjectSchema } from './ProductoCreateOrConnectWithoutCategoriaInput.schema';
import { ProductoCreateManyCategoriaInputEnvelopeObjectSchema as ProductoCreateManyCategoriaInputEnvelopeObjectSchema } from './ProductoCreateManyCategoriaInputEnvelope.schema';
import { ProductoWhereUniqueInputObjectSchema as ProductoWhereUniqueInputObjectSchema } from './ProductoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductoCreateWithoutCategoriaInputObjectSchema), z.lazy(() => ProductoCreateWithoutCategoriaInputObjectSchema).array(), z.lazy(() => ProductoUncheckedCreateWithoutCategoriaInputObjectSchema), z.lazy(() => ProductoUncheckedCreateWithoutCategoriaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductoCreateOrConnectWithoutCategoriaInputObjectSchema), z.lazy(() => ProductoCreateOrConnectWithoutCategoriaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductoCreateManyCategoriaInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProductoWhereUniqueInputObjectSchema), z.lazy(() => ProductoWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProductoUncheckedCreateNestedManyWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.ProductoUncheckedCreateNestedManyWithoutCategoriaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUncheckedCreateNestedManyWithoutCategoriaInput>;
export const ProductoUncheckedCreateNestedManyWithoutCategoriaInputObjectZodSchema = makeSchema();
