import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsuarioScalarWhereInputObjectSchema as UsuarioScalarWhereInputObjectSchema } from './UsuarioScalarWhereInput.schema';
import { UsuarioUpdateManyMutationInputObjectSchema as UsuarioUpdateManyMutationInputObjectSchema } from './UsuarioUpdateManyMutationInput.schema';
import { UsuarioUncheckedUpdateManyWithoutEstadoUsuarioInputObjectSchema as UsuarioUncheckedUpdateManyWithoutEstadoUsuarioInputObjectSchema } from './UsuarioUncheckedUpdateManyWithoutEstadoUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UsuarioUpdateManyMutationInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateManyWithoutEstadoUsuarioInputObjectSchema)])
}).strict();
export const UsuarioUpdateManyWithWhereWithoutEstadoUsuarioInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateManyWithWhereWithoutEstadoUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateManyWithWhereWithoutEstadoUsuarioInput>;
export const UsuarioUpdateManyWithWhereWithoutEstadoUsuarioInputObjectZodSchema = makeSchema();
