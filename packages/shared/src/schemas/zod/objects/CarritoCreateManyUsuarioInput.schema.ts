import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  fechaHoraBaja: z.coerce.date().optional().nullable(),
  fechaHoraModificacion: z.coerce.date().optional().nullable()
}).strict();
export const CarritoCreateManyUsuarioInputObjectSchema: z.ZodType<Prisma.CarritoCreateManyUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoCreateManyUsuarioInput>;
export const CarritoCreateManyUsuarioInputObjectZodSchema = makeSchema();
