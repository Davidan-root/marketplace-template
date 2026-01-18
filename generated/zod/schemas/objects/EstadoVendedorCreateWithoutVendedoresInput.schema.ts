import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionEV: z.string(),
  nombreEV: z.string()
}).strict();
export const EstadoVendedorCreateWithoutVendedoresInputObjectSchema: z.ZodType<Prisma.EstadoVendedorCreateWithoutVendedoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorCreateWithoutVendedoresInput>;
export const EstadoVendedorCreateWithoutVendedoresInputObjectZodSchema = makeSchema();
