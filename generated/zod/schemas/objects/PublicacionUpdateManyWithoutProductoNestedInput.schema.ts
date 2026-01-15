import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionCreateWithoutProductoInputObjectSchema as PublicacionCreateWithoutProductoInputObjectSchema } from './PublicacionCreateWithoutProductoInput.schema';
import { PublicacionUncheckedCreateWithoutProductoInputObjectSchema as PublicacionUncheckedCreateWithoutProductoInputObjectSchema } from './PublicacionUncheckedCreateWithoutProductoInput.schema';
import { PublicacionCreateOrConnectWithoutProductoInputObjectSchema as PublicacionCreateOrConnectWithoutProductoInputObjectSchema } from './PublicacionCreateOrConnectWithoutProductoInput.schema';
import { PublicacionUpsertWithWhereUniqueWithoutProductoInputObjectSchema as PublicacionUpsertWithWhereUniqueWithoutProductoInputObjectSchema } from './PublicacionUpsertWithWhereUniqueWithoutProductoInput.schema';
import { PublicacionCreateManyProductoInputEnvelopeObjectSchema as PublicacionCreateManyProductoInputEnvelopeObjectSchema } from './PublicacionCreateManyProductoInputEnvelope.schema';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './PublicacionWhereUniqueInput.schema';
import { PublicacionUpdateWithWhereUniqueWithoutProductoInputObjectSchema as PublicacionUpdateWithWhereUniqueWithoutProductoInputObjectSchema } from './PublicacionUpdateWithWhereUniqueWithoutProductoInput.schema';
import { PublicacionUpdateManyWithWhereWithoutProductoInputObjectSchema as PublicacionUpdateManyWithWhereWithoutProductoInputObjectSchema } from './PublicacionUpdateManyWithWhereWithoutProductoInput.schema';
import { PublicacionScalarWhereInputObjectSchema as PublicacionScalarWhereInputObjectSchema } from './PublicacionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublicacionCreateWithoutProductoInputObjectSchema), z.lazy(() => PublicacionCreateWithoutProductoInputObjectSchema).array(), z.lazy(() => PublicacionUncheckedCreateWithoutProductoInputObjectSchema), z.lazy(() => PublicacionUncheckedCreateWithoutProductoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PublicacionCreateOrConnectWithoutProductoInputObjectSchema), z.lazy(() => PublicacionCreateOrConnectWithoutProductoInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PublicacionUpsertWithWhereUniqueWithoutProductoInputObjectSchema), z.lazy(() => PublicacionUpsertWithWhereUniqueWithoutProductoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PublicacionCreateManyProductoInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PublicacionWhereUniqueInputObjectSchema), z.lazy(() => PublicacionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PublicacionWhereUniqueInputObjectSchema), z.lazy(() => PublicacionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PublicacionWhereUniqueInputObjectSchema), z.lazy(() => PublicacionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PublicacionWhereUniqueInputObjectSchema), z.lazy(() => PublicacionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PublicacionUpdateWithWhereUniqueWithoutProductoInputObjectSchema), z.lazy(() => PublicacionUpdateWithWhereUniqueWithoutProductoInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PublicacionUpdateManyWithWhereWithoutProductoInputObjectSchema), z.lazy(() => PublicacionUpdateManyWithWhereWithoutProductoInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PublicacionScalarWhereInputObjectSchema), z.lazy(() => PublicacionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PublicacionUpdateManyWithoutProductoNestedInputObjectSchema: z.ZodType<Prisma.PublicacionUpdateManyWithoutProductoNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUpdateManyWithoutProductoNestedInput>;
export const PublicacionUpdateManyWithoutProductoNestedInputObjectZodSchema = makeSchema();
