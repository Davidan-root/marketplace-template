import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorWhereInputObjectSchema as VendedorWhereInputObjectSchema } from './VendedorWhereInput.schema';
import { VendedorUpdateWithoutPublicacionesInputObjectSchema as VendedorUpdateWithoutPublicacionesInputObjectSchema } from './VendedorUpdateWithoutPublicacionesInput.schema';
import { VendedorUncheckedUpdateWithoutPublicacionesInputObjectSchema as VendedorUncheckedUpdateWithoutPublicacionesInputObjectSchema } from './VendedorUncheckedUpdateWithoutPublicacionesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendedorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => VendedorUpdateWithoutPublicacionesInputObjectSchema), z.lazy(() => VendedorUncheckedUpdateWithoutPublicacionesInputObjectSchema)])
}).strict();
export const VendedorUpdateToOneWithWhereWithoutPublicacionesInputObjectSchema: z.ZodType<Prisma.VendedorUpdateToOneWithWhereWithoutPublicacionesInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorUpdateToOneWithWhereWithoutPublicacionesInput>;
export const VendedorUpdateToOneWithWhereWithoutPublicacionesInputObjectZodSchema = makeSchema();
