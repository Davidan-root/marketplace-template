import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EstadoUsuarioWhereUniqueInputObjectSchema as EstadoUsuarioWhereUniqueInputObjectSchema } from './EstadoUsuarioWhereUniqueInput.schema';
import { EstadoUsuarioCreateWithoutUsuariosInputObjectSchema as EstadoUsuarioCreateWithoutUsuariosInputObjectSchema } from './EstadoUsuarioCreateWithoutUsuariosInput.schema';
import { EstadoUsuarioUncheckedCreateWithoutUsuariosInputObjectSchema as EstadoUsuarioUncheckedCreateWithoutUsuariosInputObjectSchema } from './EstadoUsuarioUncheckedCreateWithoutUsuariosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EstadoUsuarioWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EstadoUsuarioCreateWithoutUsuariosInputObjectSchema), z.lazy(() => EstadoUsuarioUncheckedCreateWithoutUsuariosInputObjectSchema)])
}).strict();
export const EstadoUsuarioCreateOrConnectWithoutUsuariosInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioCreateOrConnectWithoutUsuariosInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioCreateOrConnectWithoutUsuariosInput>;
export const EstadoUsuarioCreateOrConnectWithoutUsuariosInputObjectZodSchema = makeSchema();
