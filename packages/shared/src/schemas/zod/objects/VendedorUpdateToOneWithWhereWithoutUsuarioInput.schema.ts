import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorWhereInputObjectSchema as VendedorWhereInputObjectSchema } from './VendedorWhereInput.schema';
import { VendedorUpdateWithoutUsuarioInputObjectSchema as VendedorUpdateWithoutUsuarioInputObjectSchema } from './VendedorUpdateWithoutUsuarioInput.schema';
import { VendedorUncheckedUpdateWithoutUsuarioInputObjectSchema as VendedorUncheckedUpdateWithoutUsuarioInputObjectSchema } from './VendedorUncheckedUpdateWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendedorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => VendedorUpdateWithoutUsuarioInputObjectSchema), z.lazy(() => VendedorUncheckedUpdateWithoutUsuarioInputObjectSchema)])
}).strict();
export const VendedorUpdateToOneWithWhereWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.VendedorUpdateToOneWithWhereWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorUpdateToOneWithWhereWithoutUsuarioInput>;
export const VendedorUpdateToOneWithWhereWithoutUsuarioInputObjectZodSchema = makeSchema();
