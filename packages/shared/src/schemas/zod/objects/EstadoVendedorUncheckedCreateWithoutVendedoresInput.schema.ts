import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionEV: z.string(),
  nombreEV: z.string()
}).strict();
export const EstadoVendedorUncheckedCreateWithoutVendedoresInputObjectSchema: z.ZodType<Prisma.EstadoVendedorUncheckedCreateWithoutVendedoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorUncheckedCreateWithoutVendedoresInput>;
export const EstadoVendedorUncheckedCreateWithoutVendedoresInputObjectZodSchema = makeSchema();
