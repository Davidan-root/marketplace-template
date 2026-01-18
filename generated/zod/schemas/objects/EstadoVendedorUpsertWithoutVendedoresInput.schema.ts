import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EstadoVendedorUpdateWithoutVendedoresInputObjectSchema as EstadoVendedorUpdateWithoutVendedoresInputObjectSchema } from './EstadoVendedorUpdateWithoutVendedoresInput.schema';
import { EstadoVendedorUncheckedUpdateWithoutVendedoresInputObjectSchema as EstadoVendedorUncheckedUpdateWithoutVendedoresInputObjectSchema } from './EstadoVendedorUncheckedUpdateWithoutVendedoresInput.schema';
import { EstadoVendedorCreateWithoutVendedoresInputObjectSchema as EstadoVendedorCreateWithoutVendedoresInputObjectSchema } from './EstadoVendedorCreateWithoutVendedoresInput.schema';
import { EstadoVendedorUncheckedCreateWithoutVendedoresInputObjectSchema as EstadoVendedorUncheckedCreateWithoutVendedoresInputObjectSchema } from './EstadoVendedorUncheckedCreateWithoutVendedoresInput.schema';
import { EstadoVendedorWhereInputObjectSchema as EstadoVendedorWhereInputObjectSchema } from './EstadoVendedorWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EstadoVendedorUpdateWithoutVendedoresInputObjectSchema), z.lazy(() => EstadoVendedorUncheckedUpdateWithoutVendedoresInputObjectSchema)]),
  create: z.union([z.lazy(() => EstadoVendedorCreateWithoutVendedoresInputObjectSchema), z.lazy(() => EstadoVendedorUncheckedCreateWithoutVendedoresInputObjectSchema)]),
  where: z.lazy(() => EstadoVendedorWhereInputObjectSchema).optional()
}).strict();
export const EstadoVendedorUpsertWithoutVendedoresInputObjectSchema: z.ZodType<Prisma.EstadoVendedorUpsertWithoutVendedoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorUpsertWithoutVendedoresInput>;
export const EstadoVendedorUpsertWithoutVendedoresInputObjectZodSchema = makeSchema();
