import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  comentario: z.string(),
  fechaHoraAlta: z.coerce.date().optional(),
  puntaje: z.number().int(),
  productoId: z.bigint()
}).strict();
export const ResenaUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ResenaUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaUncheckedCreateInput>;
export const ResenaUncheckedCreateInputObjectZodSchema = makeSchema();
