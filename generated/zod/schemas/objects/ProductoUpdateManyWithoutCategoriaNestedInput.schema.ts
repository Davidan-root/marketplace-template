import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductoCreateWithoutCategoriaInputObjectSchema as ProductoCreateWithoutCategoriaInputObjectSchema } from './ProductoCreateWithoutCategoriaInput.schema';
import { ProductoUncheckedCreateWithoutCategoriaInputObjectSchema as ProductoUncheckedCreateWithoutCategoriaInputObjectSchema } from './ProductoUncheckedCreateWithoutCategoriaInput.schema';
import { ProductoCreateOrConnectWithoutCategoriaInputObjectSchema as ProductoCreateOrConnectWithoutCategoriaInputObjectSchema } from './ProductoCreateOrConnectWithoutCategoriaInput.schema';
import { ProductoUpsertWithWhereUniqueWithoutCategoriaInputObjectSchema as ProductoUpsertWithWhereUniqueWithoutCategoriaInputObjectSchema } from './ProductoUpsertWithWhereUniqueWithoutCategoriaInput.schema';
import { ProductoCreateManyCategoriaInputEnvelopeObjectSchema as ProductoCreateManyCategoriaInputEnvelopeObjectSchema } from './ProductoCreateManyCategoriaInputEnvelope.schema';
import { ProductoWhereUniqueInputObjectSchema as ProductoWhereUniqueInputObjectSchema } from './ProductoWhereUniqueInput.schema';
import { ProductoUpdateWithWhereUniqueWithoutCategoriaInputObjectSchema as ProductoUpdateWithWhereUniqueWithoutCategoriaInputObjectSchema } from './ProductoUpdateWithWhereUniqueWithoutCategoriaInput.schema';
import { ProductoUpdateManyWithWhereWithoutCategoriaInputObjectSchema as ProductoUpdateManyWithWhereWithoutCategoriaInputObjectSchema } from './ProductoUpdateManyWithWhereWithoutCategoriaInput.schema';
import { ProductoScalarWhereInputObjectSchema as ProductoScalarWhereInputObjectSchema } from './ProductoScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductoCreateWithoutCategoriaInputObjectSchema), z.lazy(() => ProductoCreateWithoutCategoriaInputObjectSchema).array(), z.lazy(() => ProductoUncheckedCreateWithoutCategoriaInputObjectSchema), z.lazy(() => ProductoUncheckedCreateWithoutCategoriaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductoCreateOrConnectWithoutCategoriaInputObjectSchema), z.lazy(() => ProductoCreateOrConnectWithoutCategoriaInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProductoUpsertWithWhereUniqueWithoutCategoriaInputObjectSchema), z.lazy(() => ProductoUpsertWithWhereUniqueWithoutCategoriaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductoCreateManyCategoriaInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProductoWhereUniqueInputObjectSchema), z.lazy(() => ProductoWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProductoWhereUniqueInputObjectSchema), z.lazy(() => ProductoWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProductoWhereUniqueInputObjectSchema), z.lazy(() => ProductoWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProductoWhereUniqueInputObjectSchema), z.lazy(() => ProductoWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProductoUpdateWithWhereUniqueWithoutCategoriaInputObjectSchema), z.lazy(() => ProductoUpdateWithWhereUniqueWithoutCategoriaInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProductoUpdateManyWithWhereWithoutCategoriaInputObjectSchema), z.lazy(() => ProductoUpdateManyWithWhereWithoutCategoriaInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProductoScalarWhereInputObjectSchema), z.lazy(() => ProductoScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProductoUpdateManyWithoutCategoriaNestedInputObjectSchema: z.ZodType<Prisma.ProductoUpdateManyWithoutCategoriaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUpdateManyWithoutCategoriaNestedInput>;
export const ProductoUpdateManyWithoutCategoriaNestedInputObjectZodSchema = makeSchema();
