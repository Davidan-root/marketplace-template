import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionEV: z.string(),
  nombreEV: z.string()
}).strict();
export const EstadoVendedorCreateManyInputObjectSchema: z.ZodType<Prisma.EstadoVendedorCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorCreateManyInput>;
export const EstadoVendedorCreateManyInputObjectZodSchema = makeSchema();
