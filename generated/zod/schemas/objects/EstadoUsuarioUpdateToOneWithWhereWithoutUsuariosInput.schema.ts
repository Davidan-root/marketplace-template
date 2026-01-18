import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EstadoUsuarioWhereInputObjectSchema as EstadoUsuarioWhereInputObjectSchema } from './EstadoUsuarioWhereInput.schema';
import { EstadoUsuarioUpdateWithoutUsuariosInputObjectSchema as EstadoUsuarioUpdateWithoutUsuariosInputObjectSchema } from './EstadoUsuarioUpdateWithoutUsuariosInput.schema';
import { EstadoUsuarioUncheckedUpdateWithoutUsuariosInputObjectSchema as EstadoUsuarioUncheckedUpdateWithoutUsuariosInputObjectSchema } from './EstadoUsuarioUncheckedUpdateWithoutUsuariosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EstadoUsuarioWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EstadoUsuarioUpdateWithoutUsuariosInputObjectSchema), z.lazy(() => EstadoUsuarioUncheckedUpdateWithoutUsuariosInputObjectSchema)])
}).strict();
export const EstadoUsuarioUpdateToOneWithWhereWithoutUsuariosInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioUpdateToOneWithWhereWithoutUsuariosInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioUpdateToOneWithWhereWithoutUsuariosInput>;
export const EstadoUsuarioUpdateToOneWithWhereWithoutUsuariosInputObjectZodSchema = makeSchema();
