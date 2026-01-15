import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EstadoVendedorWhereInputObjectSchema as EstadoVendedorWhereInputObjectSchema } from './EstadoVendedorWhereInput.schema';
import { EstadoVendedorUpdateWithoutVendedoresInputObjectSchema as EstadoVendedorUpdateWithoutVendedoresInputObjectSchema } from './EstadoVendedorUpdateWithoutVendedoresInput.schema';
import { EstadoVendedorUncheckedUpdateWithoutVendedoresInputObjectSchema as EstadoVendedorUncheckedUpdateWithoutVendedoresInputObjectSchema } from './EstadoVendedorUncheckedUpdateWithoutVendedoresInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EstadoVendedorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EstadoVendedorUpdateWithoutVendedoresInputObjectSchema), z.lazy(() => EstadoVendedorUncheckedUpdateWithoutVendedoresInputObjectSchema)])
}).strict();
export const EstadoVendedorUpdateToOneWithWhereWithoutVendedoresInputObjectSchema: z.ZodType<Prisma.EstadoVendedorUpdateToOneWithWhereWithoutVendedoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorUpdateToOneWithWhereWithoutVendedoresInput>;
export const EstadoVendedorUpdateToOneWithWhereWithoutVendedoresInputObjectZodSchema = makeSchema();
