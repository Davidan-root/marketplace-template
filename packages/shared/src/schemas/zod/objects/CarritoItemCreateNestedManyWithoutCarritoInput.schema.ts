import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoItemCreateWithoutCarritoInputObjectSchema as CarritoItemCreateWithoutCarritoInputObjectSchema } from './CarritoItemCreateWithoutCarritoInput.schema';
import { CarritoItemUncheckedCreateWithoutCarritoInputObjectSchema as CarritoItemUncheckedCreateWithoutCarritoInputObjectSchema } from './CarritoItemUncheckedCreateWithoutCarritoInput.schema';
import { CarritoItemCreateOrConnectWithoutCarritoInputObjectSchema as CarritoItemCreateOrConnectWithoutCarritoInputObjectSchema } from './CarritoItemCreateOrConnectWithoutCarritoInput.schema';
import { CarritoItemCreateManyCarritoInputEnvelopeObjectSchema as CarritoItemCreateManyCarritoInputEnvelopeObjectSchema } from './CarritoItemCreateManyCarritoInputEnvelope.schema';
import { CarritoItemWhereUniqueInputObjectSchema as CarritoItemWhereUniqueInputObjectSchema } from './CarritoItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CarritoItemCreateWithoutCarritoInputObjectSchema), z.lazy(() => CarritoItemCreateWithoutCarritoInputObjectSchema).array(), z.lazy(() => CarritoItemUncheckedCreateWithoutCarritoInputObjectSchema), z.lazy(() => CarritoItemUncheckedCreateWithoutCarritoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CarritoItemCreateOrConnectWithoutCarritoInputObjectSchema), z.lazy(() => CarritoItemCreateOrConnectWithoutCarritoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CarritoItemCreateManyCarritoInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CarritoItemWhereUniqueInputObjectSchema), z.lazy(() => CarritoItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CarritoItemCreateNestedManyWithoutCarritoInputObjectSchema: z.ZodType<Prisma.CarritoItemCreateNestedManyWithoutCarritoInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemCreateNestedManyWithoutCarritoInput>;
export const CarritoItemCreateNestedManyWithoutCarritoInputObjectZodSchema = makeSchema();
