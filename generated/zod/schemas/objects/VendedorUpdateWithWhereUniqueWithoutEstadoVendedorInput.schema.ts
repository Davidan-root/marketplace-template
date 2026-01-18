import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { VendedorWhereUniqueInputObjectSchema as VendedorWhereUniqueInputObjectSchema } from './VendedorWhereUniqueInput.schema';
import { VendedorUpdateWithoutEstadoVendedorInputObjectSchema as VendedorUpdateWithoutEstadoVendedorInputObjectSchema } from './VendedorUpdateWithoutEstadoVendedorInput.schema';
import { VendedorUncheckedUpdateWithoutEstadoVendedorInputObjectSchema as VendedorUncheckedUpdateWithoutEstadoVendedorInputObjectSchema } from './VendedorUncheckedUpdateWithoutEstadoVendedorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendedorWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => VendedorUpdateWithoutEstadoVendedorInputObjectSchema), z.lazy(() => VendedorUncheckedUpdateWithoutEstadoVendedorInputObjectSchema)])
}).strict();
export const VendedorUpdateWithWhereUniqueWithoutEstadoVendedorInputObjectSchema: z.ZodType<Prisma.VendedorUpdateWithWhereUniqueWithoutEstadoVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorUpdateWithWhereUniqueWithoutEstadoVendedorInput>;
export const VendedorUpdateWithWhereUniqueWithoutEstadoVendedorInputObjectZodSchema = makeSchema();
