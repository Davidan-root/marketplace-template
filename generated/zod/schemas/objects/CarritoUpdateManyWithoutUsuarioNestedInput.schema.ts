import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoCreateWithoutUsuarioInputObjectSchema as CarritoCreateWithoutUsuarioInputObjectSchema } from './CarritoCreateWithoutUsuarioInput.schema';
import { CarritoUncheckedCreateWithoutUsuarioInputObjectSchema as CarritoUncheckedCreateWithoutUsuarioInputObjectSchema } from './CarritoUncheckedCreateWithoutUsuarioInput.schema';
import { CarritoCreateOrConnectWithoutUsuarioInputObjectSchema as CarritoCreateOrConnectWithoutUsuarioInputObjectSchema } from './CarritoCreateOrConnectWithoutUsuarioInput.schema';
import { CarritoUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema as CarritoUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema } from './CarritoUpsertWithWhereUniqueWithoutUsuarioInput.schema';
import { CarritoCreateManyUsuarioInputEnvelopeObjectSchema as CarritoCreateManyUsuarioInputEnvelopeObjectSchema } from './CarritoCreateManyUsuarioInputEnvelope.schema';
import { CarritoWhereUniqueInputObjectSchema as CarritoWhereUniqueInputObjectSchema } from './CarritoWhereUniqueInput.schema';
import { CarritoUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema as CarritoUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema } from './CarritoUpdateWithWhereUniqueWithoutUsuarioInput.schema';
import { CarritoUpdateManyWithWhereWithoutUsuarioInputObjectSchema as CarritoUpdateManyWithWhereWithoutUsuarioInputObjectSchema } from './CarritoUpdateManyWithWhereWithoutUsuarioInput.schema';
import { CarritoScalarWhereInputObjectSchema as CarritoScalarWhereInputObjectSchema } from './CarritoScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CarritoCreateWithoutUsuarioInputObjectSchema), z.lazy(() => CarritoCreateWithoutUsuarioInputObjectSchema).array(), z.lazy(() => CarritoUncheckedCreateWithoutUsuarioInputObjectSchema), z.lazy(() => CarritoUncheckedCreateWithoutUsuarioInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CarritoCreateOrConnectWithoutUsuarioInputObjectSchema), z.lazy(() => CarritoCreateOrConnectWithoutUsuarioInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CarritoUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema), z.lazy(() => CarritoUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CarritoCreateManyUsuarioInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CarritoWhereUniqueInputObjectSchema), z.lazy(() => CarritoWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CarritoWhereUniqueInputObjectSchema), z.lazy(() => CarritoWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CarritoWhereUniqueInputObjectSchema), z.lazy(() => CarritoWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CarritoWhereUniqueInputObjectSchema), z.lazy(() => CarritoWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CarritoUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema), z.lazy(() => CarritoUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CarritoUpdateManyWithWhereWithoutUsuarioInputObjectSchema), z.lazy(() => CarritoUpdateManyWithWhereWithoutUsuarioInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CarritoScalarWhereInputObjectSchema), z.lazy(() => CarritoScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CarritoUpdateManyWithoutUsuarioNestedInputObjectSchema: z.ZodType<Prisma.CarritoUpdateManyWithoutUsuarioNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoUpdateManyWithoutUsuarioNestedInput>;
export const CarritoUpdateManyWithoutUsuarioNestedInputObjectZodSchema = makeSchema();
