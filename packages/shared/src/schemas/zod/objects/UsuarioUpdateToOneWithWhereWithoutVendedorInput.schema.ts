import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema';
import { UsuarioUpdateWithoutVendedorInputObjectSchema as UsuarioUpdateWithoutVendedorInputObjectSchema } from './UsuarioUpdateWithoutVendedorInput.schema';
import { UsuarioUncheckedUpdateWithoutVendedorInputObjectSchema as UsuarioUncheckedUpdateWithoutVendedorInputObjectSchema } from './UsuarioUncheckedUpdateWithoutVendedorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UsuarioUpdateWithoutVendedorInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutVendedorInputObjectSchema)])
}).strict();
export const UsuarioUpdateToOneWithWhereWithoutVendedorInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateToOneWithWhereWithoutVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateToOneWithWhereWithoutVendedorInput>;
export const UsuarioUpdateToOneWithWhereWithoutVendedorInputObjectZodSchema = makeSchema();
