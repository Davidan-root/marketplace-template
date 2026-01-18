import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { VendedorUncheckedCreateNestedManyWithoutEstadoVendedorInputObjectSchema as VendedorUncheckedCreateNestedManyWithoutEstadoVendedorInputObjectSchema } from './VendedorUncheckedCreateNestedManyWithoutEstadoVendedorInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionEV: z.string(),
  nombreEV: z.string(),
  vendedores: z.lazy(() => VendedorUncheckedCreateNestedManyWithoutEstadoVendedorInputObjectSchema).optional()
}).strict();
export const EstadoVendedorUncheckedCreateInputObjectSchema: z.ZodType<Prisma.EstadoVendedorUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorUncheckedCreateInput>;
export const EstadoVendedorUncheckedCreateInputObjectZodSchema = makeSchema();
