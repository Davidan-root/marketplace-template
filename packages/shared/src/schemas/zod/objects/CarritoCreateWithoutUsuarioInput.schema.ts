import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoItemCreateNestedManyWithoutCarritoInputObjectSchema as CarritoItemCreateNestedManyWithoutCarritoInputObjectSchema } from './CarritoItemCreateNestedManyWithoutCarritoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  fechaHoraBaja: z.coerce.date().optional().nullable(),
  fechaHoraModificacion: z.coerce.date().optional().nullable(),
  carritoItems: z.lazy(() => CarritoItemCreateNestedManyWithoutCarritoInputObjectSchema).optional()
}).strict();
export const CarritoCreateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.CarritoCreateWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoCreateWithoutUsuarioInput>;
export const CarritoCreateWithoutUsuarioInputObjectZodSchema = makeSchema();
