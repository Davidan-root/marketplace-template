import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoItemCreateWithoutPublicacionInputObjectSchema as CarritoItemCreateWithoutPublicacionInputObjectSchema } from './CarritoItemCreateWithoutPublicacionInput.schema';
import { CarritoItemUncheckedCreateWithoutPublicacionInputObjectSchema as CarritoItemUncheckedCreateWithoutPublicacionInputObjectSchema } from './CarritoItemUncheckedCreateWithoutPublicacionInput.schema';
import { CarritoItemCreateOrConnectWithoutPublicacionInputObjectSchema as CarritoItemCreateOrConnectWithoutPublicacionInputObjectSchema } from './CarritoItemCreateOrConnectWithoutPublicacionInput.schema';
import { CarritoItemCreateManyPublicacionInputEnvelopeObjectSchema as CarritoItemCreateManyPublicacionInputEnvelopeObjectSchema } from './CarritoItemCreateManyPublicacionInputEnvelope.schema';
import { CarritoItemWhereUniqueInputObjectSchema as CarritoItemWhereUniqueInputObjectSchema } from './CarritoItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CarritoItemCreateWithoutPublicacionInputObjectSchema), z.lazy(() => CarritoItemCreateWithoutPublicacionInputObjectSchema).array(), z.lazy(() => CarritoItemUncheckedCreateWithoutPublicacionInputObjectSchema), z.lazy(() => CarritoItemUncheckedCreateWithoutPublicacionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CarritoItemCreateOrConnectWithoutPublicacionInputObjectSchema), z.lazy(() => CarritoItemCreateOrConnectWithoutPublicacionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CarritoItemCreateManyPublicacionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CarritoItemWhereUniqueInputObjectSchema), z.lazy(() => CarritoItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CarritoItemCreateNestedManyWithoutPublicacionInputObjectSchema: z.ZodType<Prisma.CarritoItemCreateNestedManyWithoutPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemCreateNestedManyWithoutPublicacionInput>;
export const CarritoItemCreateNestedManyWithoutPublicacionInputObjectZodSchema = makeSchema();
