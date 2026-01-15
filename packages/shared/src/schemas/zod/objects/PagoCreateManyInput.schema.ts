import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  metodoPago: z.string(),
  monto: z.number(),
  pedidoId: z.bigint()
}).strict();
export const PagoCreateManyInputObjectSchema: z.ZodType<Prisma.PagoCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoCreateManyInput>;
export const PagoCreateManyInputObjectZodSchema = makeSchema();
