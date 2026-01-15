import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  fechaHoraAlta: z.literal(true).optional(),
  fechaHoraBaja: z.literal(true).optional(),
  fechaHoraModificacion: z.literal(true).optional(),
  usuarioId: z.literal(true).optional()
}).strict();
export const CarritoMinAggregateInputObjectSchema: z.ZodType<Prisma.CarritoMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CarritoMinAggregateInputType>;
export const CarritoMinAggregateInputObjectZodSchema = makeSchema();
