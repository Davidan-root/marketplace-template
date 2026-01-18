import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoItemUncheckedCreateNestedManyWithoutCarritoInputObjectSchema as CarritoItemUncheckedCreateNestedManyWithoutCarritoInputObjectSchema } from './CarritoItemUncheckedCreateNestedManyWithoutCarritoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  fechaHoraBaja: z.coerce.date().optional().nullable(),
  fechaHoraModificacion: z.coerce.date().optional().nullable(),
  carritoItems: z.lazy(() => CarritoItemUncheckedCreateNestedManyWithoutCarritoInputObjectSchema).optional()
}).strict();
export const CarritoUncheckedCreateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.CarritoUncheckedCreateWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoUncheckedCreateWithoutUsuarioInput>;
export const CarritoUncheckedCreateWithoutUsuarioInputObjectZodSchema = makeSchema();
