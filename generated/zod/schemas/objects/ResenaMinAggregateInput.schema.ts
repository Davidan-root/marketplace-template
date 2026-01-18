import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  comentario: z.literal(true).optional(),
  fechaHoraAlta: z.literal(true).optional(),
  puntaje: z.literal(true).optional(),
  productoId: z.literal(true).optional()
}).strict();
export const ResenaMinAggregateInputObjectSchema: z.ZodType<Prisma.ResenaMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ResenaMinAggregateInputType>;
export const ResenaMinAggregateInputObjectZodSchema = makeSchema();
