import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoItemUncheckedCreateNestedManyWithoutCarritoInputObjectSchema as CarritoItemUncheckedCreateNestedManyWithoutCarritoInputObjectSchema } from './CarritoItemUncheckedCreateNestedManyWithoutCarritoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  fechaHoraBaja: z.coerce.date().optional().nullable(),
  fechaHoraModificacion: z.coerce.date().optional().nullable(),
  usuarioId: z.bigint(),
  carritoItems: z.lazy(() => CarritoItemUncheckedCreateNestedManyWithoutCarritoInputObjectSchema).optional()
}).strict();
export const CarritoUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CarritoUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoUncheckedCreateInput>;
export const CarritoUncheckedCreateInputObjectZodSchema = makeSchema();
