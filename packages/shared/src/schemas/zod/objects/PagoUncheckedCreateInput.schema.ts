import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  metodoPago: z.string(),
  monto: z.number(),
  pedidoId: z.bigint()
}).strict();
export const PagoUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PagoUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoUncheckedCreateInput>;
export const PagoUncheckedCreateInputObjectZodSchema = makeSchema();
