import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  fechaHoraAlta: z.literal(true).optional(),
  fechaHoraBaja: z.literal(true).optional(),
  fechaHoraModificacion: z.literal(true).optional(),
  usuarioId: z.literal(true).optional()
}).strict();
export const CarritoMaxAggregateInputObjectSchema: z.ZodType<Prisma.CarritoMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CarritoMaxAggregateInputType>;
export const CarritoMaxAggregateInputObjectZodSchema = makeSchema();
