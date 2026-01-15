import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorUpdateWithoutUsuarioInputObjectSchema as VendedorUpdateWithoutUsuarioInputObjectSchema } from './VendedorUpdateWithoutUsuarioInput.schema';
import { VendedorUncheckedUpdateWithoutUsuarioInputObjectSchema as VendedorUncheckedUpdateWithoutUsuarioInputObjectSchema } from './VendedorUncheckedUpdateWithoutUsuarioInput.schema';
import { VendedorCreateWithoutUsuarioInputObjectSchema as VendedorCreateWithoutUsuarioInputObjectSchema } from './VendedorCreateWithoutUsuarioInput.schema';
import { VendedorUncheckedCreateWithoutUsuarioInputObjectSchema as VendedorUncheckedCreateWithoutUsuarioInputObjectSchema } from './VendedorUncheckedCreateWithoutUsuarioInput.schema';
import { VendedorWhereInputObjectSchema as VendedorWhereInputObjectSchema } from './VendedorWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => VendedorUpdateWithoutUsuarioInputObjectSchema), z.lazy(() => VendedorUncheckedUpdateWithoutUsuarioInputObjectSchema)]),
  create: z.union([z.lazy(() => VendedorCreateWithoutUsuarioInputObjectSchema), z.lazy(() => VendedorUncheckedCreateWithoutUsuarioInputObjectSchema)]),
  where: z.lazy(() => VendedorWhereInputObjectSchema).optional()
}).strict();
export const VendedorUpsertWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.VendedorUpsertWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorUpsertWithoutUsuarioInput>;
export const VendedorUpsertWithoutUsuarioInputObjectZodSchema = makeSchema();
