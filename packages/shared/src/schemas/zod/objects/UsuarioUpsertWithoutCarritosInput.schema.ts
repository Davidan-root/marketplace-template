import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsuarioUpdateWithoutCarritosInputObjectSchema as UsuarioUpdateWithoutCarritosInputObjectSchema } from './UsuarioUpdateWithoutCarritosInput.schema';
import { UsuarioUncheckedUpdateWithoutCarritosInputObjectSchema as UsuarioUncheckedUpdateWithoutCarritosInputObjectSchema } from './UsuarioUncheckedUpdateWithoutCarritosInput.schema';
import { UsuarioCreateWithoutCarritosInputObjectSchema as UsuarioCreateWithoutCarritosInputObjectSchema } from './UsuarioCreateWithoutCarritosInput.schema';
import { UsuarioUncheckedCreateWithoutCarritosInputObjectSchema as UsuarioUncheckedCreateWithoutCarritosInputObjectSchema } from './UsuarioUncheckedCreateWithoutCarritosInput.schema';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UsuarioUpdateWithoutCarritosInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutCarritosInputObjectSchema)]),
  create: z.union([z.lazy(() => UsuarioCreateWithoutCarritosInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutCarritosInputObjectSchema)]),
  where: z.lazy(() => UsuarioWhereInputObjectSchema).optional()
}).strict();
export const UsuarioUpsertWithoutCarritosInputObjectSchema: z.ZodType<Prisma.UsuarioUpsertWithoutCarritosInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpsertWithoutCarritosInput>;
export const UsuarioUpsertWithoutCarritosInputObjectZodSchema = makeSchema();
