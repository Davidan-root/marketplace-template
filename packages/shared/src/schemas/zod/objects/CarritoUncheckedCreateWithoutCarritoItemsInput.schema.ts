import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  fechaHoraBaja: z.coerce.date().optional().nullable(),
  fechaHoraModificacion: z.coerce.date().optional().nullable(),
  usuarioId: z.bigint()
}).strict();
export const CarritoUncheckedCreateWithoutCarritoItemsInputObjectSchema: z.ZodType<Prisma.CarritoUncheckedCreateWithoutCarritoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoUncheckedCreateWithoutCarritoItemsInput>;
export const CarritoUncheckedCreateWithoutCarritoItemsInputObjectZodSchema = makeSchema();
