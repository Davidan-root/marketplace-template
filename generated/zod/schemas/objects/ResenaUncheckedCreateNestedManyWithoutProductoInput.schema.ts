import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ResenaCreateWithoutProductoInputObjectSchema as ResenaCreateWithoutProductoInputObjectSchema } from './ResenaCreateWithoutProductoInput.schema';
import { ResenaUncheckedCreateWithoutProductoInputObjectSchema as ResenaUncheckedCreateWithoutProductoInputObjectSchema } from './ResenaUncheckedCreateWithoutProductoInput.schema';
import { ResenaCreateOrConnectWithoutProductoInputObjectSchema as ResenaCreateOrConnectWithoutProductoInputObjectSchema } from './ResenaCreateOrConnectWithoutProductoInput.schema';
import { ResenaCreateManyProductoInputEnvelopeObjectSchema as ResenaCreateManyProductoInputEnvelopeObjectSchema } from './ResenaCreateManyProductoInputEnvelope.schema';
import { ResenaWhereUniqueInputObjectSchema as ResenaWhereUniqueInputObjectSchema } from './ResenaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResenaCreateWithoutProductoInputObjectSchema), z.lazy(() => ResenaCreateWithoutProductoInputObjectSchema).array(), z.lazy(() => ResenaUncheckedCreateWithoutProductoInputObjectSchema), z.lazy(() => ResenaUncheckedCreateWithoutProductoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ResenaCreateOrConnectWithoutProductoInputObjectSchema), z.lazy(() => ResenaCreateOrConnectWithoutProductoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ResenaCreateManyProductoInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ResenaWhereUniqueInputObjectSchema), z.lazy(() => ResenaWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ResenaUncheckedCreateNestedManyWithoutProductoInputObjectSchema: z.ZodType<Prisma.ResenaUncheckedCreateNestedManyWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaUncheckedCreateNestedManyWithoutProductoInput>;
export const ResenaUncheckedCreateNestedManyWithoutProductoInputObjectZodSchema = makeSchema();
