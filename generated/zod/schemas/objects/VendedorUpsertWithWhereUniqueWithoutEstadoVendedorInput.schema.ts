import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { VendedorWhereUniqueInputObjectSchema as VendedorWhereUniqueInputObjectSchema } from './VendedorWhereUniqueInput.schema';
import { VendedorUpdateWithoutEstadoVendedorInputObjectSchema as VendedorUpdateWithoutEstadoVendedorInputObjectSchema } from './VendedorUpdateWithoutEstadoVendedorInput.schema';
import { VendedorUncheckedUpdateWithoutEstadoVendedorInputObjectSchema as VendedorUncheckedUpdateWithoutEstadoVendedorInputObjectSchema } from './VendedorUncheckedUpdateWithoutEstadoVendedorInput.schema';
import { VendedorCreateWithoutEstadoVendedorInputObjectSchema as VendedorCreateWithoutEstadoVendedorInputObjectSchema } from './VendedorCreateWithoutEstadoVendedorInput.schema';
import { VendedorUncheckedCreateWithoutEstadoVendedorInputObjectSchema as VendedorUncheckedCreateWithoutEstadoVendedorInputObjectSchema } from './VendedorUncheckedCreateWithoutEstadoVendedorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendedorWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VendedorUpdateWithoutEstadoVendedorInputObjectSchema), z.lazy(() => VendedorUncheckedUpdateWithoutEstadoVendedorInputObjectSchema)]),
  create: z.union([z.lazy(() => VendedorCreateWithoutEstadoVendedorInputObjectSchema), z.lazy(() => VendedorUncheckedCreateWithoutEstadoVendedorInputObjectSchema)])
}).strict();
export const VendedorUpsertWithWhereUniqueWithoutEstadoVendedorInputObjectSchema: z.ZodType<Prisma.VendedorUpsertWithWhereUniqueWithoutEstadoVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorUpsertWithWhereUniqueWithoutEstadoVendedorInput>;
export const VendedorUpsertWithWhereUniqueWithoutEstadoVendedorInputObjectZodSchema = makeSchema();
