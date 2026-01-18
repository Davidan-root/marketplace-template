import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { VendedorCreateNestedManyWithoutEstadoVendedorInputObjectSchema as VendedorCreateNestedManyWithoutEstadoVendedorInputObjectSchema } from './VendedorCreateNestedManyWithoutEstadoVendedorInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionEV: z.string(),
  nombreEV: z.string(),
  vendedores: z.lazy(() => VendedorCreateNestedManyWithoutEstadoVendedorInputObjectSchema).optional()
}).strict();
export const EstadoVendedorCreateInputObjectSchema: z.ZodType<Prisma.EstadoVendedorCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorCreateInput>;
export const EstadoVendedorCreateInputObjectZodSchema = makeSchema();
