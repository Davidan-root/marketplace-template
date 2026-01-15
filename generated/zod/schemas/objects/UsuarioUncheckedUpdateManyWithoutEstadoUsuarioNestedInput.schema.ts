import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsuarioCreateWithoutEstadoUsuarioInputObjectSchema as UsuarioCreateWithoutEstadoUsuarioInputObjectSchema } from './UsuarioCreateWithoutEstadoUsuarioInput.schema';
import { UsuarioUncheckedCreateWithoutEstadoUsuarioInputObjectSchema as UsuarioUncheckedCreateWithoutEstadoUsuarioInputObjectSchema } from './UsuarioUncheckedCreateWithoutEstadoUsuarioInput.schema';
import { UsuarioCreateOrConnectWithoutEstadoUsuarioInputObjectSchema as UsuarioCreateOrConnectWithoutEstadoUsuarioInputObjectSchema } from './UsuarioCreateOrConnectWithoutEstadoUsuarioInput.schema';
import { UsuarioUpsertWithWhereUniqueWithoutEstadoUsuarioInputObjectSchema as UsuarioUpsertWithWhereUniqueWithoutEstadoUsuarioInputObjectSchema } from './UsuarioUpsertWithWhereUniqueWithoutEstadoUsuarioInput.schema';
import { UsuarioCreateManyEstadoUsuarioInputEnvelopeObjectSchema as UsuarioCreateManyEstadoUsuarioInputEnvelopeObjectSchema } from './UsuarioCreateManyEstadoUsuarioInputEnvelope.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioUpdateWithWhereUniqueWithoutEstadoUsuarioInputObjectSchema as UsuarioUpdateWithWhereUniqueWithoutEstadoUsuarioInputObjectSchema } from './UsuarioUpdateWithWhereUniqueWithoutEstadoUsuarioInput.schema';
import { UsuarioUpdateManyWithWhereWithoutEstadoUsuarioInputObjectSchema as UsuarioUpdateManyWithWhereWithoutEstadoUsuarioInputObjectSchema } from './UsuarioUpdateManyWithWhereWithoutEstadoUsuarioInput.schema';
import { UsuarioScalarWhereInputObjectSchema as UsuarioScalarWhereInputObjectSchema } from './UsuarioScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuarioCreateWithoutEstadoUsuarioInputObjectSchema), z.lazy(() => UsuarioCreateWithoutEstadoUsuarioInputObjectSchema).array(), z.lazy(() => UsuarioUncheckedCreateWithoutEstadoUsuarioInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutEstadoUsuarioInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UsuarioCreateOrConnectWithoutEstadoUsuarioInputObjectSchema), z.lazy(() => UsuarioCreateOrConnectWithoutEstadoUsuarioInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UsuarioUpsertWithWhereUniqueWithoutEstadoUsuarioInputObjectSchema), z.lazy(() => UsuarioUpsertWithWhereUniqueWithoutEstadoUsuarioInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UsuarioCreateManyEstadoUsuarioInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UsuarioWhereUniqueInputObjectSchema), z.lazy(() => UsuarioWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UsuarioWhereUniqueInputObjectSchema), z.lazy(() => UsuarioWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UsuarioWhereUniqueInputObjectSchema), z.lazy(() => UsuarioWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UsuarioWhereUniqueInputObjectSchema), z.lazy(() => UsuarioWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UsuarioUpdateWithWhereUniqueWithoutEstadoUsuarioInputObjectSchema), z.lazy(() => UsuarioUpdateWithWhereUniqueWithoutEstadoUsuarioInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UsuarioUpdateManyWithWhereWithoutEstadoUsuarioInputObjectSchema), z.lazy(() => UsuarioUpdateManyWithWhereWithoutEstadoUsuarioInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UsuarioScalarWhereInputObjectSchema), z.lazy(() => UsuarioScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UsuarioUncheckedUpdateManyWithoutEstadoUsuarioNestedInputObjectSchema: z.ZodType<Prisma.UsuarioUncheckedUpdateManyWithoutEstadoUsuarioNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUncheckedUpdateManyWithoutEstadoUsuarioNestedInput>;
export const UsuarioUncheckedUpdateManyWithoutEstadoUsuarioNestedInputObjectZodSchema = makeSchema();
