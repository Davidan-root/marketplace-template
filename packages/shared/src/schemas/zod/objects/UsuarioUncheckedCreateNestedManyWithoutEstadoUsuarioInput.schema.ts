import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsuarioCreateWithoutEstadoUsuarioInputObjectSchema as UsuarioCreateWithoutEstadoUsuarioInputObjectSchema } from './UsuarioCreateWithoutEstadoUsuarioInput.schema';
import { UsuarioUncheckedCreateWithoutEstadoUsuarioInputObjectSchema as UsuarioUncheckedCreateWithoutEstadoUsuarioInputObjectSchema } from './UsuarioUncheckedCreateWithoutEstadoUsuarioInput.schema';
import { UsuarioCreateOrConnectWithoutEstadoUsuarioInputObjectSchema as UsuarioCreateOrConnectWithoutEstadoUsuarioInputObjectSchema } from './UsuarioCreateOrConnectWithoutEstadoUsuarioInput.schema';
import { UsuarioCreateManyEstadoUsuarioInputEnvelopeObjectSchema as UsuarioCreateManyEstadoUsuarioInputEnvelopeObjectSchema } from './UsuarioCreateManyEstadoUsuarioInputEnvelope.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuarioCreateWithoutEstadoUsuarioInputObjectSchema), z.lazy(() => UsuarioCreateWithoutEstadoUsuarioInputObjectSchema).array(), z.lazy(() => UsuarioUncheckedCreateWithoutEstadoUsuarioInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutEstadoUsuarioInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UsuarioCreateOrConnectWithoutEstadoUsuarioInputObjectSchema), z.lazy(() => UsuarioCreateOrConnectWithoutEstadoUsuarioInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UsuarioCreateManyEstadoUsuarioInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UsuarioWhereUniqueInputObjectSchema), z.lazy(() => UsuarioWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UsuarioUncheckedCreateNestedManyWithoutEstadoUsuarioInputObjectSchema: z.ZodType<Prisma.UsuarioUncheckedCreateNestedManyWithoutEstadoUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUncheckedCreateNestedManyWithoutEstadoUsuarioInput>;
export const UsuarioUncheckedCreateNestedManyWithoutEstadoUsuarioInputObjectZodSchema = makeSchema();
