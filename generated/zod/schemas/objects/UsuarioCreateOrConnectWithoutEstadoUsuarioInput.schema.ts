import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioCreateWithoutEstadoUsuarioInputObjectSchema as UsuarioCreateWithoutEstadoUsuarioInputObjectSchema } from './UsuarioCreateWithoutEstadoUsuarioInput.schema';
import { UsuarioUncheckedCreateWithoutEstadoUsuarioInputObjectSchema as UsuarioUncheckedCreateWithoutEstadoUsuarioInputObjectSchema } from './UsuarioUncheckedCreateWithoutEstadoUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UsuarioCreateWithoutEstadoUsuarioInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutEstadoUsuarioInputObjectSchema)])
}).strict();
export const UsuarioCreateOrConnectWithoutEstadoUsuarioInputObjectSchema: z.ZodType<Prisma.UsuarioCreateOrConnectWithoutEstadoUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateOrConnectWithoutEstadoUsuarioInput>;
export const UsuarioCreateOrConnectWithoutEstadoUsuarioInputObjectZodSchema = makeSchema();
