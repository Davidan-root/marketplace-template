import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  comentario: z.string(),
  fechaHoraAlta: z.coerce.date().optional(),
  puntaje: z.number().int()
}).strict();
export const ResenaUncheckedCreateWithoutProductoInputObjectSchema: z.ZodType<Prisma.ResenaUncheckedCreateWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaUncheckedCreateWithoutProductoInput>;
export const ResenaUncheckedCreateWithoutProductoInputObjectZodSchema = makeSchema();
