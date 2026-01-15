import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EstadoUsuarioCreateWithoutUsuariosInputObjectSchema as EstadoUsuarioCreateWithoutUsuariosInputObjectSchema } from './EstadoUsuarioCreateWithoutUsuariosInput.schema';
import { EstadoUsuarioUncheckedCreateWithoutUsuariosInputObjectSchema as EstadoUsuarioUncheckedCreateWithoutUsuariosInputObjectSchema } from './EstadoUsuarioUncheckedCreateWithoutUsuariosInput.schema';
import { EstadoUsuarioCreateOrConnectWithoutUsuariosInputObjectSchema as EstadoUsuarioCreateOrConnectWithoutUsuariosInputObjectSchema } from './EstadoUsuarioCreateOrConnectWithoutUsuariosInput.schema';
import { EstadoUsuarioWhereUniqueInputObjectSchema as EstadoUsuarioWhereUniqueInputObjectSchema } from './EstadoUsuarioWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EstadoUsuarioCreateWithoutUsuariosInputObjectSchema), z.lazy(() => EstadoUsuarioUncheckedCreateWithoutUsuariosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EstadoUsuarioCreateOrConnectWithoutUsuariosInputObjectSchema).optional(),
  connect: z.lazy(() => EstadoUsuarioWhereUniqueInputObjectSchema).optional()
}).strict();
export const EstadoUsuarioCreateNestedOneWithoutUsuariosInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioCreateNestedOneWithoutUsuariosInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioCreateNestedOneWithoutUsuariosInput>;
export const EstadoUsuarioCreateNestedOneWithoutUsuariosInputObjectZodSchema = makeSchema();
