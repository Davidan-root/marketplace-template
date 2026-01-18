import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ResenaCreateWithoutProductoInputObjectSchema as ResenaCreateWithoutProductoInputObjectSchema } from './ResenaCreateWithoutProductoInput.schema';
import { ResenaUncheckedCreateWithoutProductoInputObjectSchema as ResenaUncheckedCreateWithoutProductoInputObjectSchema } from './ResenaUncheckedCreateWithoutProductoInput.schema';
import { ResenaCreateOrConnectWithoutProductoInputObjectSchema as ResenaCreateOrConnectWithoutProductoInputObjectSchema } from './ResenaCreateOrConnectWithoutProductoInput.schema';
import { ResenaUpsertWithWhereUniqueWithoutProductoInputObjectSchema as ResenaUpsertWithWhereUniqueWithoutProductoInputObjectSchema } from './ResenaUpsertWithWhereUniqueWithoutProductoInput.schema';
import { ResenaCreateManyProductoInputEnvelopeObjectSchema as ResenaCreateManyProductoInputEnvelopeObjectSchema } from './ResenaCreateManyProductoInputEnvelope.schema';
import { ResenaWhereUniqueInputObjectSchema as ResenaWhereUniqueInputObjectSchema } from './ResenaWhereUniqueInput.schema';
import { ResenaUpdateWithWhereUniqueWithoutProductoInputObjectSchema as ResenaUpdateWithWhereUniqueWithoutProductoInputObjectSchema } from './ResenaUpdateWithWhereUniqueWithoutProductoInput.schema';
import { ResenaUpdateManyWithWhereWithoutProductoInputObjectSchema as ResenaUpdateManyWithWhereWithoutProductoInputObjectSchema } from './ResenaUpdateManyWithWhereWithoutProductoInput.schema';
import { ResenaScalarWhereInputObjectSchema as ResenaScalarWhereInputObjectSchema } from './ResenaScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResenaCreateWithoutProductoInputObjectSchema), z.lazy(() => ResenaCreateWithoutProductoInputObjectSchema).array(), z.lazy(() => ResenaUncheckedCreateWithoutProductoInputObjectSchema), z.lazy(() => ResenaUncheckedCreateWithoutProductoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ResenaCreateOrConnectWithoutProductoInputObjectSchema), z.lazy(() => ResenaCreateOrConnectWithoutProductoInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ResenaUpsertWithWhereUniqueWithoutProductoInputObjectSchema), z.lazy(() => ResenaUpsertWithWhereUniqueWithoutProductoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ResenaCreateManyProductoInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ResenaWhereUniqueInputObjectSchema), z.lazy(() => ResenaWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ResenaWhereUniqueInputObjectSchema), z.lazy(() => ResenaWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ResenaWhereUniqueInputObjectSchema), z.lazy(() => ResenaWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ResenaWhereUniqueInputObjectSchema), z.lazy(() => ResenaWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ResenaUpdateWithWhereUniqueWithoutProductoInputObjectSchema), z.lazy(() => ResenaUpdateWithWhereUniqueWithoutProductoInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ResenaUpdateManyWithWhereWithoutProductoInputObjectSchema), z.lazy(() => ResenaUpdateManyWithWhereWithoutProductoInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ResenaScalarWhereInputObjectSchema), z.lazy(() => ResenaScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ResenaUpdateManyWithoutProductoNestedInputObjectSchema: z.ZodType<Prisma.ResenaUpdateManyWithoutProductoNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaUpdateManyWithoutProductoNestedInput>;
export const ResenaUpdateManyWithoutProductoNestedInputObjectZodSchema = makeSchema();
