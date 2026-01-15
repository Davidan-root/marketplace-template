import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EstadoUsuarioCreateWithoutUsuariosInputObjectSchema as EstadoUsuarioCreateWithoutUsuariosInputObjectSchema } from './EstadoUsuarioCreateWithoutUsuariosInput.schema';
import { EstadoUsuarioUncheckedCreateWithoutUsuariosInputObjectSchema as EstadoUsuarioUncheckedCreateWithoutUsuariosInputObjectSchema } from './EstadoUsuarioUncheckedCreateWithoutUsuariosInput.schema';
import { EstadoUsuarioCreateOrConnectWithoutUsuariosInputObjectSchema as EstadoUsuarioCreateOrConnectWithoutUsuariosInputObjectSchema } from './EstadoUsuarioCreateOrConnectWithoutUsuariosInput.schema';
import { EstadoUsuarioUpsertWithoutUsuariosInputObjectSchema as EstadoUsuarioUpsertWithoutUsuariosInputObjectSchema } from './EstadoUsuarioUpsertWithoutUsuariosInput.schema';
import { EstadoUsuarioWhereUniqueInputObjectSchema as EstadoUsuarioWhereUniqueInputObjectSchema } from './EstadoUsuarioWhereUniqueInput.schema';
import { EstadoUsuarioUpdateToOneWithWhereWithoutUsuariosInputObjectSchema as EstadoUsuarioUpdateToOneWithWhereWithoutUsuariosInputObjectSchema } from './EstadoUsuarioUpdateToOneWithWhereWithoutUsuariosInput.schema';
import { EstadoUsuarioUpdateWithoutUsuariosInputObjectSchema as EstadoUsuarioUpdateWithoutUsuariosInputObjectSchema } from './EstadoUsuarioUpdateWithoutUsuariosInput.schema';
import { EstadoUsuarioUncheckedUpdateWithoutUsuariosInputObjectSchema as EstadoUsuarioUncheckedUpdateWithoutUsuariosInputObjectSchema } from './EstadoUsuarioUncheckedUpdateWithoutUsuariosInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EstadoUsuarioCreateWithoutUsuariosInputObjectSchema), z.lazy(() => EstadoUsuarioUncheckedCreateWithoutUsuariosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EstadoUsuarioCreateOrConnectWithoutUsuariosInputObjectSchema).optional(),
  upsert: z.lazy(() => EstadoUsuarioUpsertWithoutUsuariosInputObjectSchema).optional(),
  connect: z.lazy(() => EstadoUsuarioWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EstadoUsuarioUpdateToOneWithWhereWithoutUsuariosInputObjectSchema), z.lazy(() => EstadoUsuarioUpdateWithoutUsuariosInputObjectSchema), z.lazy(() => EstadoUsuarioUncheckedUpdateWithoutUsuariosInputObjectSchema)]).optional()
}).strict();
export const EstadoUsuarioUpdateOneRequiredWithoutUsuariosNestedInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioUpdateOneRequiredWithoutUsuariosNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioUpdateOneRequiredWithoutUsuariosNestedInput>;
export const EstadoUsuarioUpdateOneRequiredWithoutUsuariosNestedInputObjectZodSchema = makeSchema();
