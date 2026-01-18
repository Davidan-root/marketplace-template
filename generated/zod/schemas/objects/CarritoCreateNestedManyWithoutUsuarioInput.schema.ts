import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoCreateWithoutUsuarioInputObjectSchema as CarritoCreateWithoutUsuarioInputObjectSchema } from './CarritoCreateWithoutUsuarioInput.schema';
import { CarritoUncheckedCreateWithoutUsuarioInputObjectSchema as CarritoUncheckedCreateWithoutUsuarioInputObjectSchema } from './CarritoUncheckedCreateWithoutUsuarioInput.schema';
import { CarritoCreateOrConnectWithoutUsuarioInputObjectSchema as CarritoCreateOrConnectWithoutUsuarioInputObjectSchema } from './CarritoCreateOrConnectWithoutUsuarioInput.schema';
import { CarritoCreateManyUsuarioInputEnvelopeObjectSchema as CarritoCreateManyUsuarioInputEnvelopeObjectSchema } from './CarritoCreateManyUsuarioInputEnvelope.schema';
import { CarritoWhereUniqueInputObjectSchema as CarritoWhereUniqueInputObjectSchema } from './CarritoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CarritoCreateWithoutUsuarioInputObjectSchema), z.lazy(() => CarritoCreateWithoutUsuarioInputObjectSchema).array(), z.lazy(() => CarritoUncheckedCreateWithoutUsuarioInputObjectSchema), z.lazy(() => CarritoUncheckedCreateWithoutUsuarioInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CarritoCreateOrConnectWithoutUsuarioInputObjectSchema), z.lazy(() => CarritoCreateOrConnectWithoutUsuarioInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CarritoCreateManyUsuarioInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CarritoWhereUniqueInputObjectSchema), z.lazy(() => CarritoWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CarritoCreateNestedManyWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.CarritoCreateNestedManyWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoCreateNestedManyWithoutUsuarioInput>;
export const CarritoCreateNestedManyWithoutUsuarioInputObjectZodSchema = makeSchema();
