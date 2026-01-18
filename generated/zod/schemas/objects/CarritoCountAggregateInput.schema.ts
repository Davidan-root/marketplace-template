import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  fechaHoraAlta: z.literal(true).optional(),
  fechaHoraBaja: z.literal(true).optional(),
  fechaHoraModificacion: z.literal(true).optional(),
  usuarioId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CarritoCountAggregateInputObjectSchema: z.ZodType<Prisma.CarritoCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CarritoCountAggregateInputType>;
export const CarritoCountAggregateInputObjectZodSchema = makeSchema();
