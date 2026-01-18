import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema';
import { UsuarioUpdateWithoutCarritosInputObjectSchema as UsuarioUpdateWithoutCarritosInputObjectSchema } from './UsuarioUpdateWithoutCarritosInput.schema';
import { UsuarioUncheckedUpdateWithoutCarritosInputObjectSchema as UsuarioUncheckedUpdateWithoutCarritosInputObjectSchema } from './UsuarioUncheckedUpdateWithoutCarritosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UsuarioUpdateWithoutCarritosInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutCarritosInputObjectSchema)])
}).strict();
export const UsuarioUpdateToOneWithWhereWithoutCarritosInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateToOneWithWhereWithoutCarritosInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateToOneWithWhereWithoutCarritosInput>;
export const UsuarioUpdateToOneWithWhereWithoutCarritosInputObjectZodSchema = makeSchema();
