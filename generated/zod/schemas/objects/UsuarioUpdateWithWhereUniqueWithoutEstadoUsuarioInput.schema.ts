import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioUpdateWithoutEstadoUsuarioInputObjectSchema as UsuarioUpdateWithoutEstadoUsuarioInputObjectSchema } from './UsuarioUpdateWithoutEstadoUsuarioInput.schema';
import { UsuarioUncheckedUpdateWithoutEstadoUsuarioInputObjectSchema as UsuarioUncheckedUpdateWithoutEstadoUsuarioInputObjectSchema } from './UsuarioUncheckedUpdateWithoutEstadoUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UsuarioUpdateWithoutEstadoUsuarioInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutEstadoUsuarioInputObjectSchema)])
}).strict();
export const UsuarioUpdateWithWhereUniqueWithoutEstadoUsuarioInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateWithWhereUniqueWithoutEstadoUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateWithWhereUniqueWithoutEstadoUsuarioInput>;
export const UsuarioUpdateWithWhereUniqueWithoutEstadoUsuarioInputObjectZodSchema = makeSchema();
