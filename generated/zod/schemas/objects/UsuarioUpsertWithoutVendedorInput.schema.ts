import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsuarioUpdateWithoutVendedorInputObjectSchema as UsuarioUpdateWithoutVendedorInputObjectSchema } from './UsuarioUpdateWithoutVendedorInput.schema';
import { UsuarioUncheckedUpdateWithoutVendedorInputObjectSchema as UsuarioUncheckedUpdateWithoutVendedorInputObjectSchema } from './UsuarioUncheckedUpdateWithoutVendedorInput.schema';
import { UsuarioCreateWithoutVendedorInputObjectSchema as UsuarioCreateWithoutVendedorInputObjectSchema } from './UsuarioCreateWithoutVendedorInput.schema';
import { UsuarioUncheckedCreateWithoutVendedorInputObjectSchema as UsuarioUncheckedCreateWithoutVendedorInputObjectSchema } from './UsuarioUncheckedCreateWithoutVendedorInput.schema';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UsuarioUpdateWithoutVendedorInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutVendedorInputObjectSchema)]),
  create: z.union([z.lazy(() => UsuarioCreateWithoutVendedorInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutVendedorInputObjectSchema)]),
  where: z.lazy(() => UsuarioWhereInputObjectSchema).optional()
}).strict();
export const UsuarioUpsertWithoutVendedorInputObjectSchema: z.ZodType<Prisma.UsuarioUpsertWithoutVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpsertWithoutVendedorInput>;
export const UsuarioUpsertWithoutVendedorInputObjectZodSchema = makeSchema();
