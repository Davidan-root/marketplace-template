import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoItemCreateWithoutPublicacionInputObjectSchema as CarritoItemCreateWithoutPublicacionInputObjectSchema } from './CarritoItemCreateWithoutPublicacionInput.schema';
import { CarritoItemUncheckedCreateWithoutPublicacionInputObjectSchema as CarritoItemUncheckedCreateWithoutPublicacionInputObjectSchema } from './CarritoItemUncheckedCreateWithoutPublicacionInput.schema';
import { CarritoItemCreateOrConnectWithoutPublicacionInputObjectSchema as CarritoItemCreateOrConnectWithoutPublicacionInputObjectSchema } from './CarritoItemCreateOrConnectWithoutPublicacionInput.schema';
import { CarritoItemUpsertWithWhereUniqueWithoutPublicacionInputObjectSchema as CarritoItemUpsertWithWhereUniqueWithoutPublicacionInputObjectSchema } from './CarritoItemUpsertWithWhereUniqueWithoutPublicacionInput.schema';
import { CarritoItemCreateManyPublicacionInputEnvelopeObjectSchema as CarritoItemCreateManyPublicacionInputEnvelopeObjectSchema } from './CarritoItemCreateManyPublicacionInputEnvelope.schema';
import { CarritoItemWhereUniqueInputObjectSchema as CarritoItemWhereUniqueInputObjectSchema } from './CarritoItemWhereUniqueInput.schema';
import { CarritoItemUpdateWithWhereUniqueWithoutPublicacionInputObjectSchema as CarritoItemUpdateWithWhereUniqueWithoutPublicacionInputObjectSchema } from './CarritoItemUpdateWithWhereUniqueWithoutPublicacionInput.schema';
import { CarritoItemUpdateManyWithWhereWithoutPublicacionInputObjectSchema as CarritoItemUpdateManyWithWhereWithoutPublicacionInputObjectSchema } from './CarritoItemUpdateManyWithWhereWithoutPublicacionInput.schema';
import { CarritoItemScalarWhereInputObjectSchema as CarritoItemScalarWhereInputObjectSchema } from './CarritoItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CarritoItemCreateWithoutPublicacionInputObjectSchema), z.lazy(() => CarritoItemCreateWithoutPublicacionInputObjectSchema).array(), z.lazy(() => CarritoItemUncheckedCreateWithoutPublicacionInputObjectSchema), z.lazy(() => CarritoItemUncheckedCreateWithoutPublicacionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CarritoItemCreateOrConnectWithoutPublicacionInputObjectSchema), z.lazy(() => CarritoItemCreateOrConnectWithoutPublicacionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CarritoItemUpsertWithWhereUniqueWithoutPublicacionInputObjectSchema), z.lazy(() => CarritoItemUpsertWithWhereUniqueWithoutPublicacionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CarritoItemCreateManyPublicacionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CarritoItemWhereUniqueInputObjectSchema), z.lazy(() => CarritoItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CarritoItemWhereUniqueInputObjectSchema), z.lazy(() => CarritoItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CarritoItemWhereUniqueInputObjectSchema), z.lazy(() => CarritoItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CarritoItemWhereUniqueInputObjectSchema), z.lazy(() => CarritoItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CarritoItemUpdateWithWhereUniqueWithoutPublicacionInputObjectSchema), z.lazy(() => CarritoItemUpdateWithWhereUniqueWithoutPublicacionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CarritoItemUpdateManyWithWhereWithoutPublicacionInputObjectSchema), z.lazy(() => CarritoItemUpdateManyWithWhereWithoutPublicacionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CarritoItemScalarWhereInputObjectSchema), z.lazy(() => CarritoItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CarritoItemUpdateManyWithoutPublicacionNestedInputObjectSchema: z.ZodType<Prisma.CarritoItemUpdateManyWithoutPublicacionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemUpdateManyWithoutPublicacionNestedInput>;
export const CarritoItemUpdateManyWithoutPublicacionNestedInputObjectZodSchema = makeSchema();
