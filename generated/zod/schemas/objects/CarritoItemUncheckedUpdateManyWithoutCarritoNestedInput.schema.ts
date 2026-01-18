import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoItemCreateWithoutCarritoInputObjectSchema as CarritoItemCreateWithoutCarritoInputObjectSchema } from './CarritoItemCreateWithoutCarritoInput.schema';
import { CarritoItemUncheckedCreateWithoutCarritoInputObjectSchema as CarritoItemUncheckedCreateWithoutCarritoInputObjectSchema } from './CarritoItemUncheckedCreateWithoutCarritoInput.schema';
import { CarritoItemCreateOrConnectWithoutCarritoInputObjectSchema as CarritoItemCreateOrConnectWithoutCarritoInputObjectSchema } from './CarritoItemCreateOrConnectWithoutCarritoInput.schema';
import { CarritoItemUpsertWithWhereUniqueWithoutCarritoInputObjectSchema as CarritoItemUpsertWithWhereUniqueWithoutCarritoInputObjectSchema } from './CarritoItemUpsertWithWhereUniqueWithoutCarritoInput.schema';
import { CarritoItemCreateManyCarritoInputEnvelopeObjectSchema as CarritoItemCreateManyCarritoInputEnvelopeObjectSchema } from './CarritoItemCreateManyCarritoInputEnvelope.schema';
import { CarritoItemWhereUniqueInputObjectSchema as CarritoItemWhereUniqueInputObjectSchema } from './CarritoItemWhereUniqueInput.schema';
import { CarritoItemUpdateWithWhereUniqueWithoutCarritoInputObjectSchema as CarritoItemUpdateWithWhereUniqueWithoutCarritoInputObjectSchema } from './CarritoItemUpdateWithWhereUniqueWithoutCarritoInput.schema';
import { CarritoItemUpdateManyWithWhereWithoutCarritoInputObjectSchema as CarritoItemUpdateManyWithWhereWithoutCarritoInputObjectSchema } from './CarritoItemUpdateManyWithWhereWithoutCarritoInput.schema';
import { CarritoItemScalarWhereInputObjectSchema as CarritoItemScalarWhereInputObjectSchema } from './CarritoItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CarritoItemCreateWithoutCarritoInputObjectSchema), z.lazy(() => CarritoItemCreateWithoutCarritoInputObjectSchema).array(), z.lazy(() => CarritoItemUncheckedCreateWithoutCarritoInputObjectSchema), z.lazy(() => CarritoItemUncheckedCreateWithoutCarritoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CarritoItemCreateOrConnectWithoutCarritoInputObjectSchema), z.lazy(() => CarritoItemCreateOrConnectWithoutCarritoInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CarritoItemUpsertWithWhereUniqueWithoutCarritoInputObjectSchema), z.lazy(() => CarritoItemUpsertWithWhereUniqueWithoutCarritoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CarritoItemCreateManyCarritoInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CarritoItemWhereUniqueInputObjectSchema), z.lazy(() => CarritoItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CarritoItemWhereUniqueInputObjectSchema), z.lazy(() => CarritoItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CarritoItemWhereUniqueInputObjectSchema), z.lazy(() => CarritoItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CarritoItemWhereUniqueInputObjectSchema), z.lazy(() => CarritoItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CarritoItemUpdateWithWhereUniqueWithoutCarritoInputObjectSchema), z.lazy(() => CarritoItemUpdateWithWhereUniqueWithoutCarritoInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CarritoItemUpdateManyWithWhereWithoutCarritoInputObjectSchema), z.lazy(() => CarritoItemUpdateManyWithWhereWithoutCarritoInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CarritoItemScalarWhereInputObjectSchema), z.lazy(() => CarritoItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CarritoItemUncheckedUpdateManyWithoutCarritoNestedInputObjectSchema: z.ZodType<Prisma.CarritoItemUncheckedUpdateManyWithoutCarritoNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemUncheckedUpdateManyWithoutCarritoNestedInput>;
export const CarritoItemUncheckedUpdateManyWithoutCarritoNestedInputObjectZodSchema = makeSchema();
