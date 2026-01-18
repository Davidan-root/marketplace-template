import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EstadoUsuarioUpdateWithoutUsuariosInputObjectSchema as EstadoUsuarioUpdateWithoutUsuariosInputObjectSchema } from './EstadoUsuarioUpdateWithoutUsuariosInput.schema';
import { EstadoUsuarioUncheckedUpdateWithoutUsuariosInputObjectSchema as EstadoUsuarioUncheckedUpdateWithoutUsuariosInputObjectSchema } from './EstadoUsuarioUncheckedUpdateWithoutUsuariosInput.schema';
import { EstadoUsuarioCreateWithoutUsuariosInputObjectSchema as EstadoUsuarioCreateWithoutUsuariosInputObjectSchema } from './EstadoUsuarioCreateWithoutUsuariosInput.schema';
import { EstadoUsuarioUncheckedCreateWithoutUsuariosInputObjectSchema as EstadoUsuarioUncheckedCreateWithoutUsuariosInputObjectSchema } from './EstadoUsuarioUncheckedCreateWithoutUsuariosInput.schema';
import { EstadoUsuarioWhereInputObjectSchema as EstadoUsuarioWhereInputObjectSchema } from './EstadoUsuarioWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EstadoUsuarioUpdateWithoutUsuariosInputObjectSchema), z.lazy(() => EstadoUsuarioUncheckedUpdateWithoutUsuariosInputObjectSchema)]),
  create: z.union([z.lazy(() => EstadoUsuarioCreateWithoutUsuariosInputObjectSchema), z.lazy(() => EstadoUsuarioUncheckedCreateWithoutUsuariosInputObjectSchema)]),
  where: z.lazy(() => EstadoUsuarioWhereInputObjectSchema).optional()
}).strict();
export const EstadoUsuarioUpsertWithoutUsuariosInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioUpsertWithoutUsuariosInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioUpsertWithoutUsuariosInput>;
export const EstadoUsuarioUpsertWithoutUsuariosInputObjectZodSchema = makeSchema();
