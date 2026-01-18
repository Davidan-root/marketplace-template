import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioUpdateWithoutEstadoUsuarioInputObjectSchema as UsuarioUpdateWithoutEstadoUsuarioInputObjectSchema } from './UsuarioUpdateWithoutEstadoUsuarioInput.schema';
import { UsuarioUncheckedUpdateWithoutEstadoUsuarioInputObjectSchema as UsuarioUncheckedUpdateWithoutEstadoUsuarioInputObjectSchema } from './UsuarioUncheckedUpdateWithoutEstadoUsuarioInput.schema';
import { UsuarioCreateWithoutEstadoUsuarioInputObjectSchema as UsuarioCreateWithoutEstadoUsuarioInputObjectSchema } from './UsuarioCreateWithoutEstadoUsuarioInput.schema';
import { UsuarioUncheckedCreateWithoutEstadoUsuarioInputObjectSchema as UsuarioUncheckedCreateWithoutEstadoUsuarioInputObjectSchema } from './UsuarioUncheckedCreateWithoutEstadoUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UsuarioUpdateWithoutEstadoUsuarioInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutEstadoUsuarioInputObjectSchema)]),
  create: z.union([z.lazy(() => UsuarioCreateWithoutEstadoUsuarioInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutEstadoUsuarioInputObjectSchema)])
}).strict();
export const UsuarioUpsertWithWhereUniqueWithoutEstadoUsuarioInputObjectSchema: z.ZodType<Prisma.UsuarioUpsertWithWhereUniqueWithoutEstadoUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpsertWithWhereUniqueWithoutEstadoUsuarioInput>;
export const UsuarioUpsertWithWhereUniqueWithoutEstadoUsuarioInputObjectZodSchema = makeSchema();
