import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { VendedorUpdateWithoutPublicacionesInputObjectSchema as VendedorUpdateWithoutPublicacionesInputObjectSchema } from './VendedorUpdateWithoutPublicacionesInput.schema';
import { VendedorUncheckedUpdateWithoutPublicacionesInputObjectSchema as VendedorUncheckedUpdateWithoutPublicacionesInputObjectSchema } from './VendedorUncheckedUpdateWithoutPublicacionesInput.schema';
import { VendedorCreateWithoutPublicacionesInputObjectSchema as VendedorCreateWithoutPublicacionesInputObjectSchema } from './VendedorCreateWithoutPublicacionesInput.schema';
import { VendedorUncheckedCreateWithoutPublicacionesInputObjectSchema as VendedorUncheckedCreateWithoutPublicacionesInputObjectSchema } from './VendedorUncheckedCreateWithoutPublicacionesInput.schema';
import { VendedorWhereInputObjectSchema as VendedorWhereInputObjectSchema } from './VendedorWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => VendedorUpdateWithoutPublicacionesInputObjectSchema), z.lazy(() => VendedorUncheckedUpdateWithoutPublicacionesInputObjectSchema)]),
  create: z.union([z.lazy(() => VendedorCreateWithoutPublicacionesInputObjectSchema), z.lazy(() => VendedorUncheckedCreateWithoutPublicacionesInputObjectSchema)]),
  where: z.lazy(() => VendedorWhereInputObjectSchema).optional()
}).strict();
export const VendedorUpsertWithoutPublicacionesInputObjectSchema: z.ZodType<Prisma.VendedorUpsertWithoutPublicacionesInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorUpsertWithoutPublicacionesInput>;
export const VendedorUpsertWithoutPublicacionesInputObjectZodSchema = makeSchema();
